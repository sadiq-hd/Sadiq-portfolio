import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentLanguage: 'en' | 'ar' = 'en';

  switchLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
  }
}
