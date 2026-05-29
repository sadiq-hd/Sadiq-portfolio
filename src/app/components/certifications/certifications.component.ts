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
 recognitions = [
  {
    name: 'Annual Recognition & Reward Program',
    nameAr: 'برنامج التكريم والمكافآت السنوي',
    description:
      'Recognized for successfully launching the ATID Registration Platform and contributing to a cost avoidance exceeding $100 Million.',
    descriptionAr:
      'تكريم نظير الإطلاق الناجح لمنصة ATID والمساهمة في تحقيق وفر تجاوز 100 مليون دولار.',
    year: '2026'
  },

  {
    name: 'RASD Star Ambassador Award',
    nameAr: 'تكريم RASD Star Ambassador',
    description:
      'Recognized for the successful launch of the ATID Registration Platform within Research & Analytical Services Department.',
    descriptionAr:
      'تكريم نظير الإطلاق الناجح لمنصة ATID ضمن إدارة Research & Analytical Services.',
    year: '2025'
  },

  {
    name: 'Certificate of Appreciation',
    nameAr: 'شهادة تقدير',
    description:
      'Awarded for dedication and outstanding contributions to the TOC ISA Cybersecurity Campaign.',
    descriptionAr:
      'منحت تقديراً للمساهمات المتميزة والمشاركة الفعالة في حملة الأمن السيبراني TOC ISA.',
    year: '2025'
  }
];
certifications = [
  {
    name: 'Front-End Development',
    nameAr: 'تطوير الواجهة الأمامية',
    description: 'Front-end development with modern technologies.',
    descriptionAr: 'تطوير الواجهة الأمامية باستخدام تقنيات حديثة.',
    image: 'assets/certifications/frontend.jpg',
  },
  {
    name: 'Back-End Development',
    nameAr: 'تطوير الواجهة الخلفية',
    description: 'Back-end development fundamentals and practices.',
    descriptionAr: 'أساسيات وممارسات تطوير الواجهة الخلفية.',
    image: 'assets/certifications/backend.jpg',
  },
  {
    name: 'ASP.NET Development',
    nameAr: 'تطوير ASP.NET',
    description: 'ASP.NET web application development.',
    descriptionAr: 'تطوير تطبيقات الويب باستخدام ASP.NET.',
    image: 'assets/certifications/asp.jpg',
  },
  {
    name: 'UX Design',
    nameAr: 'تصميم تجربة المستخدم',
    description: 'User experience design principles.',
    descriptionAr: 'مبادئ تصميم تجربة المستخدم.',
    image: 'assets/certifications/UX.jpg',
  },
  {
    name: 'JavaScript Development',
    nameAr: 'تطوير جافاسكريبت',
    description: 'JavaScript development fundamentals.',
    descriptionAr: 'أساسيات تطوير جافاسكريبت.',
    image: 'assets/certifications/javascript.jpg',
  },
  {
    name: 'Git',
    nameAr: 'Git',
    description: 'Version control and collaboration.',
    descriptionAr: 'التحكم في الإصدارات والتعاون البرمجي.',
    image: 'assets/certifications/git.jpg',
  }
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