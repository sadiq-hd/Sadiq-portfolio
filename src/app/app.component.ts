import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    CertificationsComponent,
    ContactMeComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
}
