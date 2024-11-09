import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentLanguage: 'en' | 'ar' = 'en';
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    // الاشتراك في تغييرات اللغة
    this.translationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }
}