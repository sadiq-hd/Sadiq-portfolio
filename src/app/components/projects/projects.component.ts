import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  constructor(private translationService: TranslationService) {}

  projects = [
    {
      name: 'Flutter App',
      nameAr: 'تطبيق Flutter',
      description: 'This is a simple flutter app for calculations.',
      descriptionAr: 'هذا تطبيق Flutter بسيط للحسابات.',
      image: 'assets/projects/flutter-app-image.jpg',
      githubLink: 'https://github.com/your-repo/flutter-app',
    },
    {
      name: 'Graduation Project',
      nameAr: 'مشروع التخرج',
      description: 'Shuttercart is my graduation project, an online store using Angular.',
      descriptionAr: 'Shuttercart هو مشروع تخرجي، متجر إلكتروني باستخدام Angular.',
      image: 'assets/projects/shuttercart-image.png',
      githubLink: 'https://github.com/your-repo/shuttercart',
    },
    {
      name: 'Graduation Project',
      nameAr: 'مشروع التخرج',
      description: 'Shuttercart is my graduation project, an online store using Angular.',
      descriptionAr: 'Shuttercart هو مشروع تخرجي، متجر إلكتروني باستخدام Angular.',
      image: 'assets/projects/shuttercart-image.png',
      githubLink: 'https://github.com/your-repo/shuttercart',
    },
    {
      name: 'Graduation Project',
      nameAr: 'مشروع التخرج',
      description: 'Shuttercart is my graduation project, an online store using Angular.',
      descriptionAr: 'Shuttercart هو مشروع تخرجي، متجر إلكتروني باستخدام Angular.',
      image: 'assets/projects/shuttercart-image.png',
      githubLink: 'https://github.com/your-repo/shuttercart',
    },
    {
      name: 'Graduation Project',
      nameAr: 'مشروع التخرج',
      description: 'Shuttercart is my graduation project, an online store using Angular.',
      descriptionAr: 'Shuttercart هو مشروع تخرجي، متجر إلكتروني باستخدام Angular.',
      image: 'assets/projects/shuttercart-image.png',
      githubLink: 'https://github.com/your-repo/shuttercart',
    },
    {
      name: 'Graduation Project8',
      nameAr: 'مشروع التخرج+',
      description: 'Shuttercart is my graduation project, an online store using Angular.',
      descriptionAr: 'Shuttercart هو مشروع تخرجي، متجر إلكتروني باستخدام Angular.',
      image: 'assets/projects/shuttercart-image.png',
      githubLink: 'https://github.com/your-repo/shuttercart',
    },
    // المزيد من المشاريع هنا
  ];

  displayedProjects: { name: string; nameAr: string; description: string; descriptionAr: string; image: string; githubLink: string; }[] = [];

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
    this.updateDisplayedProjects();
  }

  updateDisplayedProjects() {
    this.displayedProjects = this.projects.slice(this.startIndex, this.startIndex + 3);
  }

  nextProject() {
    if (this.startIndex + 3 < this.projects.length) {
      this.startIndex += 1;
      this.updateDisplayedProjects();
    }
  }

  prevProject() {
    if (this.startIndex > 0) {
      this.startIndex -= 1;
      this.updateDisplayedProjects();
    }
  }

  canNavigateNext(): boolean {
    return this.startIndex + 3 < this.projects.length;
  }

  canNavigatePrev(): boolean {
    return this.startIndex > 0;
  }
}
