import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  currentLanguage: 'en' | 'ar' = 'en';
  constructor(private translationService: TranslationService) {}
   experience = [
    {
      company: {
        en: 'Barri Logistics',
        ar: 'بري للنقل اللوجيستي'
      },
      date: {
        en: 'Aug 2024 – Oct 2024',
        ar: 'أغسطس 2024 – أكتوبر 2024'
      },
      role: {
        en: 'Full Stack Developer',
        ar: 'مطور ويب متكامل'
      },
      description: {
        en: [
          'Redesigned the client and admin pages with the new layout',
          'Added animations to enhance website interactivity',
"Design Register and Login Page",

          'Implemented a new widget for improved functionality'
        ],
        ar: [
          'إعادة تصميم صفحة العملاء وصفحة المسؤول بالهيئة الجديدة',
          'إضافة أنيميشن لتحسين تفاعل الموقع',
          'تصميم صفحة التسجيل وتسجيل الدخول',

          'إضافة ودجت جديدة'
        ]
      },
      technologies: {
        en: ['Angular 13', 'ASP.NET', 'Bootstrap', 'Postman', 'Docker', 'MySQL'],
        ar: ['Angular 13', 'ASP.NET', 'Bootstrap', 'Postman', 'Docker', 'MySQL']
      }
    },
    {
      company: {
        en: 'Arabic Technologies',
        ar: 'التقنيات العربية'
      },
      date: {
        en: 'Aug 2024 – Oct 2024',
        ar: 'أغسطس 2024 – أكتوبر 2024'
      },
      role: {
        en: 'Full Stack Developer',
        ar: 'مطور ويب متكامل'
      },
      description: {
        en: [
          'Redesigned the Saudi Water Authority website',
          'Added animations to enhance interactivity',
          'Developed new services like license issuance and forgot password feature',
          'Integrated QR code for license display',
          'Collaborated directly with the client to understand requirements'
        ],
        ar: [
          'إعادة تصميم موقع هيئة المياه السعودية',
          'إضافة أنيميشن لتحسين تفاعل الموقع',
          'تطوير خدمات جديدة مثل إصدار الرخص وخدمة نسيان كلمة المرور',
          'إضافة عرض الرخصة باستخدام QR Code',
          'التواصل المباشر مع العميل لفهم المتطلبات'
        ]
      },
      technologies: {
        en: ['Angular +16', 'ASP.NET', 'Tailwind', 'Postman', 'SQL Server'],
        ar: ['Angular +16', 'ASP.NET', 'Tailwind', 'Postman', 'SQL Server']
      }
    }
  ];
  

  ngOnInit(): void {
    // الاشتراك في تغييرات اللغة
    this.translationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }
}
