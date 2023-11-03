import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../models/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuairoServiceService {

  constructor(private http: HttpClient) { }

  getUsuarios(){

    return this.http.get('http://localhost:3000/usuarios')
  }


  getUsuario(id:number){

    return this.http.get('http://localhost:3000/usuarios/' + id)
  }

  addUsuario(record:IUsuario){
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'aplication/json; charset=utf-8');
    return this.http.post('http://localhost:3000/usuarios', JSON.stringify(record), {headers:headers})
  }


  updateUsuario(record:IUsuario){
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'aplication/json; charset=utf-8');
    return this.http.put('http://localhost:3000/usuarios/' + record.id, JSON.stringify(record), {headers:headers})
  }


  deleteUsuario(id:number){
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'aplication/json; charset=utf-8');
    return this.http.delete('http://localhost:3000/usuarios/' + id, {headers:headers})
  }

}
