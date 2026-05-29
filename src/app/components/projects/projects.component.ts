import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnDestroy, OnInit, HostListener } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Project {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  githubLink: string;
  demoLink?: string; // رابط الديمو اختياري
  tech: string[];
  techAr: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  currentLanguage: 'en' | 'ar' = 'en';
  startIndex = 0;
  itemsToShow = 3;
  isBrowser: boolean;
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(
    private translationService: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

 projects: Project[] = [
  {
    name: "WhatsApp Commerce Platform",
    nameAr: "منصة الطلب عبر الواتساب",
    description: "A lightweight commerce platform for small businesses with product management, shopping cart, Firebase integration, and WhatsApp order submission.",
    descriptionAr: "منصة تجارة إلكترونية خفيفة للمشاريع الصغيرة تتضمن إدارة المنتجات وسلة مشتريات وتكامل Firebase وإرسال الطلب مباشرة عبر الواتساب.",
    image: "assets/projects/whatsapp-store.jpeg",
    githubLink: "",
    demoLink: "https://store-form.netlify.app/",
    tech: ["Angular", "Firebase", "TypeScript"],
    techAr: ["أنجولار", "فايربيس", "تايب سكريبت"]
  },
  {
    name: "Enterprise Digital Signage Solutions",
    nameAr: "حلول الشاشات التفاعلية المؤسسية",
    description: "Interactive digital signage experiences, feedback systems, meeting room displays, event screens, and video wall applications.",
    descriptionAr: "تجارب شاشات تفاعلية وأنظمة تقييم وشاشات غرف اجتماعات ومعايدات وواجهات مخصصة للشاشات العملاقة.",
    image: "assets/projects/signage.png",
    githubLink: "",
    tech: ["HTML", "CSS", "JavaScript"],
    techAr: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Zakkerni - Smart Task Manager",
    nameAr: "ذكرني - مدير المهام الذكي",
    description: "A modern task management web app with Arabic support, dashboard, analytics, CRUD operations, and export functionality.",
    descriptionAr: "تطبيق ويب لإدارة المهام مع دعم العربية ولوحة تحكم وتحليلات وعمليات إضافة وتعديل وحذف وإمكانية التصدير.",
    image: "assets/projects/zakkerni.jpg",
    githubLink: "",
    demoLink: "https://zakkerni.netlify.app/",
    tech: ["Angular", "TypeScript", "Tailwind CSS"],
    techAr: ["أنجولار", "تايب سكريبت", "تايلويند CSS"]
  },
  {
    name: "Certificate Generator",
    nameAr: "مولد الشهادات",
    description: "Certificate generation platform with Excel import, drag-and-drop editor, and PDF/PNG export.",
    descriptionAr: "منصة لتوليد الشهادات مع استيراد Excel ومحرر سحب وإفلات وتصدير PDF و PNG.",
    image: "assets/projects/certificategenerator.jpg",
    githubLink: "",
    demoLink: "https://shahadat-generator.netlify.app/",
    tech: ["Angular", "TypeScript", "Tailwind CSS"],
    techAr: ["أنجولار", "تايب سكريبت", "تايلويند CSS"]
  },
  {
    name: "Secure Authentication System with OTP",
    nameAr: "نظام مصادقة آمن باستخدام OTP",
    description: "A secure authentication API built with ASP.NET Core, OTP verification, and reusable authentication services.",
    descriptionAr: "نظام مصادقة آمن مبني باستخدام ASP.NET Core مع تحقق OTP وخدمات مصادقة قابلة لإعادة الاستخدام.",
    image: "assets/projects/asp app.png",
    githubLink: "https://github.com/sadiq-hd/public-Auth-api",
    tech: ["ASP.NET Core", "C#", "Security"],
    techAr: ["ASP.NET Core", "سي شارب", "الأمان"]
  },

  // Other Projects / Archive
  {
    name: "ShutterCart - Graduation Project",
    nameAr: "مشروع التخرج - ShutterCart",
    description: "Graduation e-commerce project built with Angular and TypeScript.",
    descriptionAr: "مشروع تخرج لمنصة تسوق إلكترونية مبنية باستخدام Angular و TypeScript.",
    image: "assets/projects/shuttercart-image.png",
    githubLink: "https://github.com/sadiq-hd/ShutterCart.git",
    tech: ["Angular", "TypeScript"],
    techAr: ["أنجولار", "تايب سكريبت"]
  },
  {
    name: "E-Commerce Frontend",
    nameAr: "واجهة متجر إلكتروني",
    description: "Responsive e-commerce frontend built with React.js.",
    descriptionAr: "واجهة متجر إلكتروني متجاوبة مبنية باستخدام React.js.",
    image: "assets/projects/ecommerce-frontend.jpg",
    githubLink: "https://github.com/sadiq-hd/react-onlineStore-FrontEnd.git",
    demoLink: "https://recat-onlinestore.netlify.app/",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    techAr: ["رياكت", "جافا سكريبت", "تايلويند CSS"]
  }
];

  displayedProjects: Project[] = [];

  ngOnInit(): void {
    this.isLoading = true;
    
    this.translationService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.currentLanguage = language;
      });

    this.updateItemsToShow();
    this.updateDisplayedProjects();
    this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateItemsToShow();
    this.updateDisplayedProjects();
  }

  updateItemsToShow(): void {
    if (!this.isBrowser) {
      this.itemsToShow = 3;
      return;
    }

    const width = window.innerWidth;
    if (width < 640) {
      this.itemsToShow = 1; // mobile
    } else if (width < 1024) {
      this.itemsToShow = 2; // tablet
    } else {
      this.itemsToShow = 3; // desktop
    }
  }

  updateDisplayedProjects(): void {
    this.displayedProjects = this.projects.slice(this.startIndex, this.startIndex + this.itemsToShow);
  }

  nextProject(): void {
    if (this.startIndex + this.itemsToShow < this.projects.length) {
      this.startIndex++;
      this.updateDisplayedProjects();
    }
  }

  prevProject(): void {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.updateDisplayedProjects();
    }
  }

  canNavigateNext(): boolean {
    return this.startIndex + this.itemsToShow < this.projects.length;
  }

  canNavigatePrev(): boolean {
    return this.startIndex > 0;
  }

  trackByProject(index: number, project: Project): string {
    return project.name;
  }
}