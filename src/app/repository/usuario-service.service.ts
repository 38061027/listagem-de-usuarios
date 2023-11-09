import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../models/usuarioModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<IUsuario[]>('http://localhost:3000/usuarios');
  }

  getUsuario(id: number) {
    return this.http.get<IUsuario>('http://localhost:3000/usuarios/' + id);
  }

  addUsuario(record: IUsuario) {
    return this.http.post<IUsuario>(
      'http://localhost:3000/usuarios',
      record,
    );
  }

  updateUsuario(record: IUsuario) {

    return this.http.put<IUsuario>(
      'http://localhost:3000/usuarios/' + record.id, record,

    );
  }

  deleteUsuario(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'aplication/json; charset=utf-8');
    return this.http.delete('http://localhost:3000/usuarios/' + id, {
      headers: headers,
    });
  }
}
