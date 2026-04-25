import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list';
import { RepoListComponent } from './pages/repo-list/repo-list';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'repos', component: RepoListComponent },
  { path: '**', redirectTo: 'users' },
];
