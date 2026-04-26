import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly apiUrl: string = environment.usersApiUrl;

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    const userList = this.http.get<Usuario[]>(this.apiUrl);
    return userList;
  }

  getUsuarioById(id: number): Observable<Usuario | undefined> {
    return this.getUsuarios().pipe(
      map(usuarios => usuarios.find(u => u.id === id))
    );
  }
}
