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
        en: 'Barri',
        ar: 'بري للنقل اللوجيستي'
      },
      date:
      {
        en:'Aug 2024 – Oct 2024',
        ar:'اغسطس 2024 – اكتوبر 2024',
      },      role: {
        en: 'Full Stack Developer',
        ar: 'مطور ويب متكامل'
      },
      description: {
        en: [
          'Redesign a company website',
          'Optimize website performance',
          'Implement responsive design'
        ],
        ar: [
          'إعادة تصميم موقع الشركة',
          'تحسين أداء الموقع',
          'تنفيذ تصميم متجاوب'
        ]
      }
    },
    {
      company: {
        en: 'Arabic Technologies',
        ar: 'التقنيات العربية'
      },
      date:
      {
        en:'Aug 2024 – Oct 2024',
        ar:'اغسطس 2024 – اكتوبر 2024',
      },
       
      role: {
        en: 'Full Stack Developer',
        ar: 'مطور ويب متكامل'
      },
      description: {
        en: [
          'Develop new features for the website',
          'Collaborate with design and marketing teams',
          'Maintain website security and updates'
        ],
        ar: [
          'تطوير ميزات جديدة للموقع',
          'التعاون مع فرق التصميم والتسويق',
          'الحفاظ على أمان الموقع وتحديثاته'
        ]
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
