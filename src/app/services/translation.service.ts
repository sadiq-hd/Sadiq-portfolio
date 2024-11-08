import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage: 'en' | 'ar' = 'en';
  private translations: { [key: string]: string } = {};
  private translationsSubject = new BehaviorSubject<{ [key: string]: string }>({});

  constructor(private http: HttpClient) {
    // التحقق مما إذا كانت localStorage متاحة قبل الوصول إليها
    if (this.isBrowser()) {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage === 'ar' || savedLanguage === 'en') {
        this.currentLanguage = savedLanguage as 'en' | 'ar';
      }
    }
    this.loadTranslations(this.currentLanguage);
  }

  get translations$(): Observable<{ [key: string]: string }> {
    return this.translationsSubject.asObservable();
  }

  loadTranslations(language: 'en' | 'ar'): void {
    const path = `assets/i18n/${language}.json`;
    this.http.get<{ [key: string]: string }>(path).pipe(
      tap(translations => {
        this.translations = translations;
        this.translationsSubject.next(this.translations);
      })
    ).subscribe();
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  switchLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
    if (this.isBrowser()) {
      localStorage.setItem('language', this.currentLanguage);
    }
    this.loadTranslations(this.currentLanguage);
  }

  get currentLang(): 'en' | 'ar' {
    return this.currentLanguage;
  }

  // التحقق مما إذا كنا في بيئة المتصفح
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
