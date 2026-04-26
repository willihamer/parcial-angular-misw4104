import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list';
import { RepoListComponent } from './pages/repo-list/repo-list';
import { RepoDetailComponent } from './pages/repo-detail/repo-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'repos', component: RepoListComponent },
  { path: 'repos/:id', component: RepoDetailComponent },
  { path: '**', redirectTo: 'users' },
];
