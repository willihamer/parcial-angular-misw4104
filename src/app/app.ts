import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav';
import { TopBarComponent } from './components/top-bar/top-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent, TopBarComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isSideNavOpen = false;

  toggleSideNav(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  closeSideNav(): void {
    this.isSideNavOpen = false;
  }
}
