import { Routes } from '@angular/router';
import { SignInComponent } from './views/sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
];
