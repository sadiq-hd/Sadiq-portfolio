import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // Import CommonModule to use *ngFor
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
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
  ];
}
