import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: '**', redirectTo: 'users' },
];
