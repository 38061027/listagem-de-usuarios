import { UsuarioServiceService } from './../repository/usuario-service.service';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../models/usuarioModel';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent{

  model:IUsuario = {id:0, name:'', idade: 0, perfil: ''}


  constructor(private service: UsuarioServiceService){}

  addUsuario(){
    if(this.model.id == 0){
      this.service.addUsuario(this.model).subscribe();
    }else{

    }
  }


}
