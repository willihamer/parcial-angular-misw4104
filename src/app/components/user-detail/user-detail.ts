import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TitleCasePipe, NgClass } from '@angular/common';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [TitleCasePipe, NgClass],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetailComponent {
  @Input() user!: Usuario;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
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
