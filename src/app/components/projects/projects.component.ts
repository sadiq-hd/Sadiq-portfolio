import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  currentLanguage: 'en' | 'ar' = 'en';
  startIndex = 0;
  itemsToShow = 3; // عدد المشاريع الافتراضي
  isBrowser: boolean;

  constructor(
    private translationService: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  projects = [
    {
      name: "E-Commerce Frontend",
      nameAr: "واجهة متجر إلكتروني",
      description: "A responsive e-commerce frontend built with React.js. Features include product browsing, shopping cart functionality, and user authentication. The project uses mock data to simulate a full e-commerce experience.",
      descriptionAr: "واجهة متجر إلكتروني متجاوبة مبنية باستخدام رياكت . تشمل الميزات تصفح المنتجات، وظائف سلة التسوق، ونظام تسجيل الدخول. يستخدم المشروع بيانات تجريبية لمحاكاة تجربة متجر إلكتروني كاملة.",
      image: "assets/projects/ecommerce-frontend.png",
      githubLink: "https://recat-onlinestore.netlify.app/"
    },
    {
      name: "GPA Calculator App",
      nameAr: "تطبيق حساب المعدل التراكمي",
      description: "A user-friendly Flutter app to calculate GPA on a 4.0 scale. Simply input your grades and credit hours to get accurate results. Designed to enhance mobile app development and design skills.",
      descriptionAr: "تطبيق سهل الاستخدام لحساب المعدل التراكمي وفق مقياس 4.0. يمكنك إدخال درجات المواد وساعات الاعتماد للحصول على نتائج دقيقة. تم تصميم التطبيق لتطوير مهاراتي في تطوير وتصميم تطبيقات الجوال.",
      image: "assets/projects/Gpa.png",
      githubLink: "https://github.com/sadiq-hd/GPA-Calculator-2"
    },
    {
      name: "ShutterCart - Graduation Project",
      nameAr: "مشروع التخرج - ShutterCart",
      description: "ShutterCart is an online shopping platform developed as part of my graduation project. Built using Angular, TypeScript, and JSON, it supports four user roles: Admin, Employee, Customer, and Guest. This project showcases my ability to design and implement both the frontend and backend of a web application.",
      descriptionAr: "ShutterCart هو منصة تسوق إلكترونية تم تطويرها كمشروع تخرجي. يعتمد المشروع على Angular وTypeScript وJSON، ويدعم أربعة أنواع من المستخدمين: المدير، الموظف، العميل، والضيف. يبرز المشروع مهاراتي في تصميم وتطوير واجهات وبرمجة خلفية لتطبيقات الويب.",
      image: "assets/projects/shuttercart-image.png",
      githubLink: "https://github.com/sadiq-hd/ShutterCart.git"
    },
    {
      name: "Secure Authentication System with OTP",
      nameAr: "نظام مصادقة آمن باستخدام OTP",
      description: "A secure user authentication system built with ASP.NET Core. The system uses OTP (One-Time Password) for safe registration and login, helping developers implement modern and high-security authentication methods.",
      descriptionAr: "نظام مصادقة آمن للمستخدمين تم تطويره باستخدام ASP.NET Core. يعتمد النظام على OTP (رمز تحقق لمرة واحدة) لتسجيل الحسابات وتسجيل الدخول بشكل آمن، مما يساعد المطورين على بناء أنظمة مصادقة حديثة وعالية الأمان.",
      image: "assets/projects/asp app.png",
      githubLink: "https://github.com/your-repo/shuttercart"
    },
    {
      name: "Morph Blog - Laravel Blog Project",
      nameAr: "مشروع مدونة باستخدام Laravel",
      description: "Morph Blog is a blog project built using Laravel PHP, where users can create, comment on, and delete posts and comments. It features role-based permissions allowing administrators to manage inappropriate content. The project uses MySQL for database management and Bootstrap for responsive frontend design, showcasing proficiency in Laravel, PHP, and modern web development.",
      descriptionAr: "Morph Blog هو مشروع مدونة تم تطويره باستخدام Laravel PHP. يمكن للمستخدمين إنشاء المنشورات والتعليق عليها وحذفها. يتضمن المشروع صلاحيات إدارة المحتوى غير المناسب للمسؤولين. يعتمد المشروع على MySQL لإدارة قواعد البيانات وBootstrap لتصميم واجهات متجاوبة، مما يعكس مهاراتي في Laravel وPHP وتطوير الويب الحديث.",
      image: "assets/projects/morph.png",
      githubLink: "https://github.com/sadiq-hd/Morph-blog"
    },
    {
      name: "BulkSendPy - Bulk Email Sender",
      nameAr: "BulkSendPy - نظام إرسال الإيميلات الجماعية",
      description: "BulkSendPy is a Python-based software project designed to streamline the process of sending bulk emails for businesses. Users can quickly and efficiently send customized emails with attachments to a list of recipients, enhancing communication and improving email handling efficiency.",
      descriptionAr: "BulkSendPy هو مشروع برمجي مكتوب بلغة بايثون يهدف إلى تسهيل عملية إرسال الإيميلات الجماعية للشركات. يمكن للمستخدمين إرسال رسائل بريد إلكتروني مخصصة مع مرفقات إلى قائمة من المستلمين بشكل سريع وفعال، مما يساعد في تحسين التواصل وزيادة الكفاءة في التعامل مع البريد الإلكتروني.",
      image: "assets/projects/python-app.png",
      githubLink: "https://github.com/sadiq-hd/send_emails_by_python"
    }
  ];

  displayedProjects: { name: string; nameAr: string; description: string; descriptionAr: string; image: string; githubLink: string; }[] = [];

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  
    this.updateItemsToShow();
    this.updateDisplayedProjects();
  
    if (this.isBrowser) {
      // استمع لتغيير حجم الشاشة
      window.addEventListener('resize', () => {
        this.updateItemsToShow();
        this.updateDisplayedProjects();
      });
    }
  }
  
  updateItemsToShow(): void {
    if (this.isBrowser) {
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      this.itemsToShow = isSmallScreen ? 1 : 3; // عرض 3 على الشاشات الكبيرة و 1 على الصغيرة
    } else {
      this.itemsToShow = 3; // الافتراضي لبيئة SSR
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
  
}  