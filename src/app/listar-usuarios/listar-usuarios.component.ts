import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../repository/usuario-service.service';
import { IUsuario } from '../models/usuarioModel';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit{

  listaUsuarios: IUsuario[] = []

  constructor(private service: UsuarioServiceService){}

  ngOnInit(): void {
      this.service.getUsuarios().subscribe(
        (usuarios:IUsuario[]) =>{
          this.listaUsuarios = usuarios
        }
      )
  }

}
