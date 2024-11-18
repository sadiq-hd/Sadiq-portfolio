import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // Import CommonModule to use *ngFor
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
    'laravel.svg',
    'MySQL.svg',
    'PHP.svg',
    'image 10.svg',

  ];

  skillTexts = [
    ' Git','TypeScript' , 'CSS', 'Python', 'React ',
    'Angular', 'Bootstrap', 'HTML', 'JavaScript', 'Laravel', 'MySQL',  'PHP','Java',
  ];
  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }
}
