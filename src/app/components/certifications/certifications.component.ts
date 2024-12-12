import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  currentLanguage: 'en' | 'ar' = 'en';
  startIndex = 0;
  itemsToShow = 3; // عدد الشهادات الافتراضي
  isBrowser: boolean;
  displayedCertifications: { name: string; nameAr: string; description: string; descriptionAr: string; image: string }[] = [];
  certifications = [
    {
      name: 'Back-End Development',
      nameAr: 'تطوير الواجهة الخلفية',
      description: 'Comprehensive back-end development course.',
      descriptionAr: 'دورة شاملة لتطوير الواجهة الخلفية.',
      image: 'assets/certifications/backend.jpg',
    },
    {
      name: 'Front-End Development',
      nameAr: 'تطوير الواجهة الأمامية',
      description: 'Learn front-end development with modern technologies.',
      descriptionAr: 'تعلم تطوير الواجهة الأمامية باستخدام تقنيات حديثة.',
      image: 'assets/certifications/frontend.jpg',
    },
    {
      name: 'ASP.NET Development',
      nameAr: 'تطوير ASP.NET',
      description: 'Comprehensive course on ASP.NET development.',
      descriptionAr: 'دورة شاملة عن تطوير ASP.NET.',
      image: 'assets/certifications/asp.jpg',
    },
    {
      name: 'Learn Machine',
      nameAr: 'تعلم الآلة',
      description: 'Comprehensive course on machine learning.',
      descriptionAr: 'دورة شاملة عن تعلم الآلة.',
      image: 'assets/certifications/learn-machean.jpg',
    },
    {
      name: 'AI Development',
      nameAr: 'تطوير الذكاء الاصطناعي',
      description: 'Advanced AI development techniques.',
      descriptionAr: 'تقنيات متقدمة لتطوير الذكاء الاصطناعي.',
      image: 'assets/certifications/machin-ai.jpg',
    },
    {
      name: 'UX Design',
      nameAr: 'تصميم تجربة المستخدم',
      description: 'Comprehensive UX design course.',
      descriptionAr: 'دورة شاملة لتصميم تجربة المستخدم.',
      image: 'assets/certifications/UX.jpg',
    },
    {
      name: 'Web Application Development',
      nameAr: 'تطوير تطبيقات الويب',
      description: 'Comprehensive course on web application development.',
      descriptionAr: 'دورة شاملة عن تطوير تطبيقات الويب.',
      image: 'assets/certifications/web-app.jpg',
    },
    {
      name: 'JavaScript Development',
      nameAr: 'تطوير جافاسكريبت',
      description: 'Master the art of JavaScript development.',
      descriptionAr: 'إتقان فن تطوير جافاسكريبت.',
      image: 'assets/certifications/javascript.jpg',
    },
    
    {
      name: 'Dart Programming',
      nameAr: 'برمجة Dart',
      description: 'Learn Dart programming for Flutter development.',
      descriptionAr: 'تعلم برمجة Dart لتطوير Flutter.',
      image: 'assets/certifications/Dart.jpg',
    },
    {
      name: 'Flutter Development',
      nameAr: 'تطوير Flutter',
      description: 'Master building apps with Flutter.',
      descriptionAr: 'إتقان بناء التطبيقات باستخدام Flutter.',
      image: 'assets/certifications/flutter.jpg',
    },
    {
      name: 'Flutter Development 2',
      nameAr: 'تطوير Flutter 2',
      description: 'Master building apps with Flutter.',
      descriptionAr: 'إتقان بناء التطبيقات باستخدام Flutter.',
      image: 'assets/certifications/flutter2.jpg',
    },
    {
      name: 'Cybersecurity Essentials',
      nameAr: 'أساسيات الأمن السيبراني',
      description: 'Understand the essentials of cybersecurity.',
      descriptionAr: 'فهم أساسيات الأمن السيبراني.',
      image: 'assets/certifications/Cyper.jpg',
    },
    {
      name: 'Java Programming',
      nameAr: 'برمجة جافا',
      description: 'Learn Java programming for various applications.',
      descriptionAr: 'تعلم برمجة جافا للتطبيقات المختلفة.',
      image: 'assets/certifications/java.jpg',
    },
    {
      name: 'Git ',
      nameAr: ' Git',
      description: ' Git for version control and collaboration.',
      descriptionAr: ' Git للتحكم في الإصدارات والتعاون.',
      image: 'assets/certifications/git.jpg',
    },
  ];
  

  constructor(
    private translationService: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });

    this.updateItemsToShow();
    this.updateDisplayedCertifications();

    if (this.isBrowser) {
      // تحديث عدد العناصر عند تغيير حجم الشاشة
      window.addEventListener('resize', () => {
        this.updateItemsToShow();
        this.updateDisplayedCertifications();
      });
    }
  }

  updateItemsToShow(): void {
    if (this.isBrowser) {
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      this.itemsToShow = isSmallScreen ? 1 : 3;
    } else {
      this.itemsToShow = 3; // الافتراضي في بيئة SSR
    }
  }

  updateDisplayedCertifications(): void {
    this.displayedCertifications = this.certifications.slice(
      this.startIndex,
      this.startIndex + this.itemsToShow
    );
  }

  nextCertification(): void {
    if (this.startIndex + this.itemsToShow < this.certifications.length) {
      this.startIndex++;
      this.updateDisplayedCertifications();
    }
  }

  prevCertification(): void {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.updateDisplayedCertifications();
    }
  }

  canNavigateNext(): boolean {
    return this.startIndex + this.itemsToShow < this.certifications.length;
  }

  canNavigatePrev(): boolean {
    return this.startIndex > 0;
  }
}