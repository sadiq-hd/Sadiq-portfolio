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
      name: 'Introduction to Java',
      nameAr: 'مدخل إلى لغة Java',
      description: 'Introductory course to Java programming.',
      descriptionAr: 'دورة تعريفية لبرمجة Java.',
      image: 'assets/certifications/java.jpg',
    },
    {
      name: 'Back-End Development',
      nameAr: 'تطوير الواجهة الخلفية',
      description: 'Comprehensive back-end development course.',
      descriptionAr: 'دورة شاملة لتطوير الواجهة الخلفية.',
      image: 'assets/certifications/backend.jpg',
    },
    {
      name: 'Back-End Development',
      nameAr: 'تطوير الواجهة الخلفية',
      description: 'Comprehensive back-end development course.',
      descriptionAr: 'دورة شاملة لتطوير الواجهة الخلفية.',
      image: 'assets/certifications/backend.jpg',
    },
    {
      name: 'Back-End Development',
      nameAr: 'تطوير الواجهة الخلفية',
      description: 'Comprehensive back-end development course.',
      descriptionAr: 'دورة شاملة لتطوير الواجهة الخلفية.',
      image: 'assets/certifications/backend.jpg',
    },
    // المزيد من الشهادات هنا
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
    this.updateDisplayedCertifications();
  }

  updateDisplayedCertifications() {
    this.displayedCertifications = this.certifications.slice(this.startIndex, this.startIndex + 2);
  }

  nextCertification() {
    if (this.startIndex + 2 < this.certifications.length) {
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
    return this.startIndex + 2 < this.certifications.length;
  }

  canNavigatePrev(): boolean {
    return this.startIndex > 0;
  }
}
