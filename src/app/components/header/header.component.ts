import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavLink {
  label: { en: string; ar: string };
  path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, RouterModule],  // تأكد من إضافة CommonModule هنا

  standalone: true,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileMenuOpen: boolean = false;
  navLinks: NavLink[] = [
    { label: { en: 'About me', ar: 'نبذة عني' }, path: '#about-me' },
    { label: { en: 'Skills', ar: 'مهاراتي' }, path: '#skills' },
    { label: { en: 'Projects', ar: 'مشاريعي' }, path: '#projects' },
    { label: { en: 'Experience', ar: 'الخبرة' }, path: '#experience' },
    { label: { en: 'Certifications', ar: 'الشهادات' }, path: '#certifications' },
    { label: { en: 'CV', ar: 'السيرة الذاتية' }, path: '#cv' },
    { label: { en: 'Contact me', ar: 'تواصل معي' }, path: '#contact-me' }
  ];

  constructor(public translationService: TranslationService) {}

  switchLanguage(): void {
    this.translationService.switchLanguage();
  }

  get currentLanguage(): 'en' | 'ar' {
    return this.translationService.currentLang;
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
