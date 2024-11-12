import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // الصفحة الرئيسية كمسار رئيسي
  { path: '**', redirectTo: '', pathMatch: 'full' } // التعامل مع المسارات غير المعروفة
];
