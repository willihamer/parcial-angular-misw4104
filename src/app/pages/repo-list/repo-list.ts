import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Repositorio } from '../../models/repositorio.model';
import { RepositorioService } from '../../services/repositorio.service';

@Component({
  selector: 'app-repo-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './repo-list.html',
  styleUrl: './repo-list.css',
})
export class RepoListComponent implements OnInit {
  repos: Repositorio[] = [];
  isLoading = false;
  errorMessage = '';

  private readonly languageColors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572a5',
    Java: '#b07219',
    Go: '#00add8',
    Rust: '#dea584',
    HTML: '#e34c26',
    CSS: '#563d7c',
    'C++': '#f34b7d',
    'C#': '#178600',
    Shell: '#89e051',
    Kotlin: '#a97bff',
    Swift: '#f05138',
    Ruby: '#701516',
    YAML: '#cb171e',
  };

  constructor(private repositorioService: RepositorioService) {}

  ngOnInit(): void {
    this.loadRepos();
  }

  loadRepos(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.repositorioService.getRepositorios().subscribe({
      next: (data) => {
        this.repos = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar los repositorios. Por favor, intente nuevamente.';
        this.isLoading = false;
        console.error('Error loading repos:', err);
      },
    });
  }

  getLanguageColor(language: string): string {
    return this.languageColors[language] ?? '#727785';
  }
}
