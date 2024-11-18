import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
      name: 'ASP.NET Development',
      nameAr: 'تطوير ASP.NET',
      description: 'Comprehensive course on ASP.NET development.',
      descriptionAr: 'دورة شاملة عن تطوير ASP.NET.',
      image: 'assets/certifications/asp.jpg',
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
      name: 'Git Mastery',
      nameAr: 'إتقان Git',
      description: 'Master Git for version control and collaboration.',
      descriptionAr: 'إتقان Git للتحكم في الإصدارات والتعاون.',
      image: 'assets/certifications/git.jpg',
    },
  ];
  

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
    this.updateDisplayedCertifications();
  }

  updateDisplayedCertifications() {
    this.displayedCertifications = this.certifications.slice(this.startIndex, this.startIndex + 3); // عرض 3 عناصر
  }

  nextCertification() {
    if (this.startIndex + 3 < this.certifications.length) {
      this.startIndex += 1;
      this.updateDisplayedCertifications();
    }
  }

  prevCertification() {
    if (this.startIndex > 0) {
      this.startIndex -= 1;
      this.updateDisplayedCertifications();
    }
  }

  canNavigateNext(): boolean {
    return this.startIndex + 3 < this.certifications.length; // تحقق من وجود شهادات للتنقل للأمام
  }

  canNavigatePrev(): boolean {
    return this.startIndex > 0; // تحقق من وجود شهادات للتنقل للخلف
  }
}
