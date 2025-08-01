// experience.component.ts - Fixed Version
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnDestroy, OnInit, HostListener } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Experience {
  company: {
    en: string;
    ar: string;
  };
  date: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  description: {
    en: string[];
    ar: string[];
  };
  technologies: {
    en: string[];
    ar: string[];
  };
  logo?: string;
  type: 'full-time' | 'part-time' | 'Cooperative training' | 'internship';
  location: {
    en: string;
    ar: string;
  };
}

type JobType = 'full-time' | 'part-time' | 'Cooperative training' | 'internship';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  currentLanguage: 'en' | 'ar' = 'en';
  startIndex = 0;
  itemsToShow = 2;
  isBrowser: boolean;
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(
    private translationService: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  experience: Experience[] = [
    {
      company: {
        en: 'Saudi Aramco (Contractor)',
        ar: 'أرامكو السعودية (مقاول)'
      },
      date: {
        en: 'Jun 2025 – Present',
        ar: 'يونيو 2025 – الآن'
      },
      role: {
        en: 'Software Engineer',
        ar: 'مهندس برمجيات'
      },
      description: {
        en: [
          'Collaborating with IT and engineering teams to enhance internal tools and applications',
          'Diagnosing technical issues and escalating tickets for enterprise-level systems'
        ],
        ar: [
          'التعاون مع فرق تقنية المعلومات والهندسة لتحسين الأدوات والتطبيقات الداخلية',
          'تشخيص المشاكل التقنية وتصعيد التذاكر لأنظمة المؤسسات'
        ]
      },
      technologies: {
        en: ['Enterprise Systems', 'Technical Support', 'System Diagnostics'],
        ar: ['أنظمة المؤسسات', 'الدعم التقني', 'تشخيص الأنظمة']
      },
      type: 'full-time',
      location: {
        en: 'Saudi Arabia',
        ar: 'المملكة العربية السعودية'
      },
      logo: 'assets/companies/aramco-logo.png'
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
          'Redesigned the Saudi Water Authority portal using Angular and ASP.NET',
          'Delivered secure license features with dynamic QR generation',
          'Engaged directly with clients to implement tailored solutions'
        ],
        ar: [
          'إعادة تصميم موقع هيئة المياه السعودية باستخدام Angular و ASP.NET',
          'تطوير خدمات الرخص الآمنة مع إنشاء QR ديناميكي',
          'التواصل المباشر مع العملاء لتنفيذ حلول مخصصة'
        ]
      },
      technologies: {
        en: ['Angular +16', 'ASP.NET', 'Tailwind', 'Postman', 'SQL Server'],
        ar: ['Angular +16', 'ASP.NET', 'Tailwind', 'Postman', 'SQL Server']
      },
      type: 'full-time',
      location: {
        en: 'Riyadh',
        ar: 'الرياض'
      },
      logo: 'assets/companies/arabic-tech-logo.png'
    },
    {
      company: {
        en: 'Barri Solution Logistics Company',
        ar: 'شركة بري للحلول اللوجيستية'
      },
      date: {
        en: 'Jun 2022 – Aug 2022',
        ar: 'يونيو 2022 – أغسطس 2022'
      },
      role: {
        en: 'Full Stack Developer',
        ar: 'مطور ويب متكامل'
      },
      description: {
        en: [
          'Modernized internal logistics platform using Bootstrap and ASP.NET to enhance UI/UX',
          'Developed dynamic UI components and supported system optimization'
        ],
        ar: [
          'تحديث منصة الخدمات اللوجيستية الداخلية باستخدام Bootstrap و ASP.NET لتحسين واجهة المستخدم',
          'تطوير مكونات واجهة المستخدم الديناميكية ودعم تحسين النظام'
        ]
      },
      technologies: {
        en: ['Angular 13', 'ASP.NET', 'Bootstrap', 'Postman', 'Docker', 'MySQL'],
        ar: ['Angular 13', 'ASP.NET', 'Bootstrap', 'Postman', 'Docker', 'MySQL']
      },
      type: 'Cooperative training',
      location: {
        en: 'Al Khobar',
        ar: 'الخبر'
      },
      logo: 'assets/companies/barri-logo.png'
    },
    {
      company: {
        en: 'Atlas Al Sharqiyah Est.',
        ar: 'مؤسسة أطلس الشرقية'
      },
      date: {
        en: 'Feb 2022 – Jun 2022',
        ar: 'فبراير 2022 – يونيو 2022'
      },
      role: {
        en: 'Computer Assembly Worker',
        ar: 'عامل تجميع أجهزة الكمبيوتر'
      },
      description: {
        en: [
          'Assembled computer components and ensured basic hardware functionality',
          'Performed routine quality checks and collaborated with technicians on-site and remotely'
        ],
        ar: [
          'تجميع مكونات أجهزة الكمبيوتر وضمان الوظائف الأساسية للأجهزة',
          'إجراء فحوصات الجودة الروتينية والتعاون مع الفنيين في الموقع وعن بُعد'
        ]
      },
      technologies: {
        en: ['Hardware Assembly', 'Quality Control', 'Technical Support'],
        ar: ['تجميع الأجهزة', 'مراقبة الجودة', 'الدعم التقني']
      },
      type: 'part-time',
      location: {
        en: 'Eastern Province',
        ar: 'المنطقة الشرقية'
      },
      logo: 'assets/companies/atlas-logo.png'
    }
  ];

  displayedExperiences: Experience[] = [];

  ngOnInit(): void {
    this.isLoading = true;
    
    this.translationService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.currentLanguage = language;
      });

    this.updateItemsToShow();
    this.updateDisplayedExperiences();
    this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateItemsToShow();
    this.updateDisplayedExperiences();
  }

  updateItemsToShow(): void {
    if (!this.isBrowser) {
      this.itemsToShow = 2;
      return;
    }

    const width = window.innerWidth;
    if (width < 768) {
      this.itemsToShow = 1;
    } else {
      this.itemsToShow = 2;
    }
  }

  updateDisplayedExperiences(): void {
    this.displayedExperiences = this.experience.slice(
      this.startIndex, 
      this.startIndex + this.itemsToShow
    );
  }

  nextExperience(): void {
    if (this.startIndex + this.itemsToShow < this.experience.length) {
      this.startIndex++;
      this.updateDisplayedExperiences();
    }
  }

  prevExperience(): void {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.updateDisplayedExperiences();
    }
  }

  canNavigateNext(): boolean {
    return this.startIndex + this.itemsToShow < this.experience.length;
  }

  canNavigatePrev(): boolean {
    return this.startIndex > 0;
  }

  trackByExperience(index: number, exp: Experience): string {
    return exp.company.en;
  }

  // Fixed type issues
  getTypeColor(type: JobType): string {
    const typeColorMap: Record<JobType, string> = {
      'full-time': 'bg-green-500/20 text-green-400 border-green-400/30',
      'part-time': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'Cooperative training': 'bg-accent/20 text-accent border-accent/30',
      'internship': 'bg-purple-500/20 text-purple-400 border-purple-400/30'
    };
    return typeColorMap[type] || typeColorMap['Cooperative training'];
  }

  getTypeLabel(type: JobType): { en: string; ar: string } {
    const typeLabelMap: Record<JobType, { en: string; ar: string }> = {
      'full-time': { en: 'Full Time', ar: 'دوام كامل' },
      'part-time': { en: 'Part Time', ar: 'دوام جزئي' },
      'Cooperative training': { en: 'Cooperative training', ar: ' تدريب جامعي' },
      'internship': { en: 'Internship', ar: 'تدريب' }
    };
    return typeLabelMap[type] || typeLabelMap['Cooperative training'];
  }
}