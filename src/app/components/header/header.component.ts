import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface NavLink {
  label: { en: string; ar: string };
  path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentLanguage: 'en' | 'ar' = 'en';
  isMobileMenuOpen: boolean = false;

  navLinks: NavLink[] = [
    { label: { en: 'About me', ar: 'نبذة عني' }, path: '#about' },
    { label: { en: 'Skills', ar: 'مهاراتي' }, path: '#skills' },
    { label: { en: 'Projects', ar: 'مشاريعي' }, path: '#projects' },
    { label: { en: 'Experience', ar: 'الخبرة' }, path: '#experience' },
    { label: { en: 'Certifications', ar: 'الشهادات' }, path: '#certifications' },
    { label: { en: 'CV', ar: 'السيرة الذاتية' }, path: '#cv' },
    { label: { en: 'Contact me', ar: 'تواصل معي' }, path: '#contact' }
  ];

  ngOnInit(): void {
    // التحقق مما إذا كان localStorage متاحًا في بيئة المتصفح
    if (this.isBrowser()) {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage === 'ar' || savedLanguage === 'en') {
        this.currentLanguage = savedLanguage as 'en' | 'ar';
      }
    }
  }

  switchLanguage(): void {
    // تبديل اللغة وتخزينها في localStorage إذا كانت متاحة
    this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
    if (this.isBrowser()) {
      localStorage.setItem('language', this.currentLanguage);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // التحقق مما إذا كنا في بيئة المتصفح
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
