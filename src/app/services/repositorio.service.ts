import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Repositorio } from '../models/repositorio.model';

@Injectable({
  providedIn: 'root',
})
export class RepositorioService {
  private readonly apiUrl: string = environment.repositoriesApiUrl;

  constructor(private http: HttpClient) {}

  getRepositorios(): Observable<Repositorio[]> {
    return this.http.get<Repositorio[]>(this.apiUrl);
  }

  getRepositorioById(id: number): Observable<Repositorio | undefined> {
    return this.http.get<Repositorio[]>(this.apiUrl).pipe(
      map((repos) => repos.find((r) => r.id === id))
    );
  }
}
