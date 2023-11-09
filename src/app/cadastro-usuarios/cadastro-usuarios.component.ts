import { UsuarioServiceService } from './../repository/usuario-service.service';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../models/usuarioModel';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app-state';
import * as fromUsuariosAction from '../store/usuarios/usuarios.action';
@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent{

  model:IUsuario = {id:0, name:'', idade: 0, perfil: ''}


  constructor(private store: Store<IAppState>){}

  addUsuario(){
    if(this.model.id == 0){
      // this.service.addUsuario(this.model).subscribe();
      this.store.dispatch(fromUsuariosAction.createUsuario({payload:this.model}))
    }else{
      this.store.dispatch(fromUsuariosAction.updateUsuario({payload:this.model}))

    }
  }


}
