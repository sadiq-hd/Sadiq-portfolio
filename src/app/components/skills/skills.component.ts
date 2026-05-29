import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  currentLanguage: 'en' | 'ar' = 'en';

  constructor(private translationService: TranslationService) {}

  skillImages = [
    'git.svg',
    'image 4.svg',
    'image 5.svg',
    'image 8.svg',
    'image 17-1.svg',
    'image 17.svg',
    'image 18.svg',
    'image2.svg',
    'image3.svg',
    'MySQL.svg',
  ];

  frontendSkills = [
    'Angular',
    'React',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Bootstrap'
  ];

  backendSkills = [
    'ASP.NET',
    'ASP.NET Core',
    'Node.js',
    'REST APIs',
    'SQL Server',
    'MySQL',
    'Firebase Firestore'
  ];

  toolsSkills = [
    'Git',
    'GitHub',
    'Visual Studio',
    'VS Code',
    'Figma',
    'UI/UX',
    'Responsive Design',
    'Digital Signage'
  ];

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }
}