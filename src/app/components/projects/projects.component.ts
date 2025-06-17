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
      name: "Zakkerni - Smart Task Manager",
      nameAr: "ذكرني - مدير المهام الذكي",
      description: "A modern web application for task management and daily organization with full Arabic language support. Features comprehensive task management, analytics, and export functionality.",
      descriptionAr: "تطبيق ويب حديث لإدارة المهام والتنظيم اليومي مع دعم كامل للغة العربية. يتضمن إدارة شاملة للمهام وتحليلات وإمكانية التصدير.",
      image: "assets/projects/zakkerni.jpg",
      githubLink: "https://github.com/sadiq-hd/zakkerni-app.git",
      demoLink: "https://zakkerni.netlify.app/",
      tech: ["Angular", "TypeScript", "Tailwind CSS"],
      techAr: ["أنجولار", "تايب سكريبت", "تايلويند CSS"]
    },
    {
      name: "Certificate Generator",
      nameAr: "مولد الشهادات",
      description: "Smart and advanced certificate creator built with Angular 18. Create custom certificates easily with Excel import, drag-and-drop editor, and multi-format export.",
      descriptionAr: "مولد شهادات ذكي ومتقدم مبني بـ Angular 18. إنشاء شهادات مخصصة بسهولة مع استيراد Excel ومحرر السحب والإفلات والتصدير متعدد التنسيقات.",
      image: "assets/projects/certificategenerator.jpg",
      githubLink: "https://github.com/sadiq-hd/certificate-generator.git",
      demoLink: "https://shahadat-generator.netlify.app/",
      tech: ["Angular", "TypeScript", "Tailwind CSS"],
      techAr: ["أنجولار", "تايب سكريبت", "تايلويند CSS"]
    },
    {
      name: "E-Commerce Frontend",
      nameAr: "واجهة متجر إلكتروني",
      description: "A responsive e-commerce frontend built with React.js. Features include product browsing, shopping cart functionality, and user authentication.",
      descriptionAr: "واجهة متجر إلكتروني متجاوبة مبنية باستخدام رياكت. تشمل الميزات تصفح المنتجات ووظائف سلة التسوق ونظام تسجيل الدخول.",
      image: "assets/projects/ecommerce-frontend.jpg",
      githubLink: "https://github.com/sadiq-hd/react-onlineStore-FrontEnd.git",
      demoLink: "https://recat-onlinestore.netlify.app/",
      tech: ["React.js", "JavaScript", "Tailwind CSS"],
      techAr: ["رياكت", "جافا سكريبت", "تايلويند CSS"]
    },
    {
      name: "GPA Calculator App",
      nameAr: "تطبيق حساب المعدل التراكمي",
      description: "A user-friendly Flutter app to calculate GPA on a 4.0 scale. Simply input your grades and credit hours to get accurate results.",
      descriptionAr: "تطبيق سهل الاستخدام لحساب المعدل التراكمي وفق مقياس 4.0. يمكنك إدخال درجات المواد وساعات الاعتماد للحصول على نتائج دقيقة.",
      image: "assets/projects/Gpa.png",
      githubLink: "https://github.com/sadiq-hd/GPA-Calculator-2",
      tech: ["Flutter", "Dart", "Mobile"],
      techAr: ["فلاتر", "دارت", "تطبيقات جوال"]
    },
    {
      name: "ShutterCart - Graduation Project",
      nameAr: "مشروع التخرج - ShutterCart",
      description: "ShutterCart is an online shopping platform developed as part of my graduation project. Built using Angular, TypeScript, and JSON.",
      descriptionAr: "ShutterCart هو منصة تسوق إلكترونية تم تطويرها كمشروع تخرجي. يعتمد المشروع على Angular وTypeScript وJSON.",
      image: "assets/projects/shuttercart-image.png",
      githubLink: "https://github.com/sadiq-hd/ShutterCart.git",
      tech: ["Angular", "TypeScript", "JSON"],
      techAr: ["أنجولار", "تايب سكريبت", "JSON"]
    },
    {
      name: "Secure Authentication System with OTP",
      nameAr: "نظام مصادقة آمن باستخدام OTP",
      description: "A secure user authentication system built with ASP.NET Core. The system uses OTP for safe registration and login.",
      descriptionAr: "نظام مصادقة آمن للمستخدمين تم تطويره باستخدام ASP.NET Core. يعتمد النظام على OTP لتسجيل الحسابات وتسجيل الدخول بشكل آمن.",
      image: "assets/projects/asp app.png",
      githubLink: "https://github.com/your-repo/shuttercart",
      tech: ["ASP.NET Core", "C#", "Security"],
      techAr: ["ASP.NET Core", "سي شارب", "الأمان"]
    },
    {
      name: "Morph Blog - Laravel Blog Project",
      nameAr: "مشروع مدونة باستخدام Laravel",
      description: "Morph Blog is a blog project built using Laravel PHP, where users can create, comment on, and delete posts and comments.",
      descriptionAr: "Morph Blog هو مشروع مدونة تم تطويره باستخدام Laravel PHP. يمكن للمستخدمين إنشاء المنشورات والتعليق عليها وحذفها.",
      image: "assets/projects/morph.png",
      githubLink: "https://github.com/sadiq-hd/Morph-blog",
      tech: ["Laravel", "PHP", "MySQL"],
      techAr: ["لارافيل", "PHP", "MySQL"]
    },
    {
      name: "BulkSendPy - Bulk Email Sender",
      nameAr: "BulkSendPy - نظام إرسال الإيميلات الجماعية",
      description: "BulkSendPy is a Python-based software project designed to streamline the process of sending bulk emails for businesses.",
      descriptionAr: "BulkSendPy هو مشروع برمجي مكتوب بلغة بايثون يهدف إلى تسهيل عملية إرسال الإيميلات الجماعية للشركات.",
      image: "assets/projects/python-app.png",
      githubLink: "https://github.com/sadiq-hd/send_emails_by_python",
      tech: ["Python", "Email API", "Automation"],
      techAr: ["بايثون", "واجهة البريد", "الأتمتة"]
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