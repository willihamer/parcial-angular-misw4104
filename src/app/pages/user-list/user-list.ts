import { Component, OnInit } from '@angular/core';
import { TitleCasePipe, NgClass } from '@angular/common';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TitleCasePipe, NgClass],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserListComponent implements OnInit {
  users: Usuario[] = [];
  isLoading = false;
  errorMessage = '';
  selectedUser: Usuario | null = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => {
        console.log('data', data);
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load users. Please try again.';
        this.isLoading = false;
        console.error('Error loading users:', err);
      },
    });
  }

  selectUser(user: Usuario): void {
    this.selectedUser = user;
  }

  closeDetail(): void {
    this.selectedUser = null;
  }

  getRoleBadgeClass(role: string): string {
    switch (role?.toLowerCase()) {
      case 'admin':
        return 'badge-role-admin';
      case 'designer':
        return 'badge-role-designer';
      default:
        return 'badge-role-developer';
    }
  }
}
