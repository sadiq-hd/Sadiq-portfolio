import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<'en' | 'ar'>(this.getInitialLanguage());
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor() {}

  private getInitialLanguage(): 'en' | 'ar' {
    if (this.isBrowser()) {
      const savedLanguage = localStorage.getItem('language') as 'en' | 'ar';
      return savedLanguage || 'en';
    }
    return 'en'; // القيمة الافتراضية إذا كانت خارج المتصفح
  }

  switchLanguage(): void {
    const newLanguage = this.currentLanguageSubject.value === 'en' ? 'ar' : 'en';
    this.currentLanguageSubject.next(newLanguage);
    if (this.isBrowser()) {
      localStorage.setItem('language', newLanguage);
    }
  }

  get currentLang(): 'en' | 'ar' {
    return this.currentLanguageSubject.value;
  }

  // التحقق مما إذا كنا في بيئة المتصفح
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
