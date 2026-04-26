import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css'
})
export class SideNavComponent {
  @Output() closeNav = new EventEmitter<void>();

  onLinkClick(): void {
    this.closeNav.emit();
  }
}
