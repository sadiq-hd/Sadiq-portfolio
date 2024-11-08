import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Home', component: HomeComponent },

  { path: '', redirectTo: '/about-me', pathMatch: 'full' }, // المسار الافتراضي
  { path: '**', redirectTo: '/about-me', pathMatch: 'full' } // التعامل مع المسارات غير المعروفة
];
