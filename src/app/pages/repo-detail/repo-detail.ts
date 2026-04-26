import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repositorio } from '../../models/repositorio.model';
import { RepositorioService } from '../../services/repositorio.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-repo-detail',
  standalone: true,
  imports: [],
  templateUrl: './repo-detail.html',
  styleUrl: './repo-detail.css',
})
export class RepoDetailComponent implements OnInit {
  repo: Repositorio | undefined;
  ownerUsername: string | undefined;
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repositorioService: RepositorioService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    this.repositorioService.getRepositorioById(id).subscribe({
      next: (data) => {
        this.repo = data;
        if (!data) {
          this.errorMessage = 'Repositorio no encontrado.';
          this.isLoading = false;
        } else {
          this.usuarioService.getUsuarioById(data.ownerId).subscribe({
            next: (user) => {
              this.ownerUsername = user?.username || `ID: ${data.ownerId}`;
              this.isLoading = false;
            },
            error: () => {
              this.ownerUsername = `ID: ${data.ownerId}`;
              this.isLoading = false;
            }
          });
        }
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar el repositorio.';
        this.isLoading = false;
        console.error('Error loading repo:', err);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/repos']);
  }
}
