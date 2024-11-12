import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule],  // تأكد من إضافة CommonModule هنا
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  currentLanguage: 'en' | 'ar' = 'en';
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    // الاشتراك في تغييرات اللغة
    this.translationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }
}