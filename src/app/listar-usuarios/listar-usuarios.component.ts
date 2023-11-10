import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../repository/usuario-service.service';
import { IUsuario } from '../models/usuarioModel';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app-state';
import * as fromUsuariosAction from '../store/usuarios/usuarios.action';
import * as fromUsuariosSelector from '../store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit{


  listaUsuarios$: Observable<IUsuario[]> = this.store.select(fromUsuariosSelector.getUsuarios)
  usuario$: Observable<IUsuario | null> = this.store.select(fromUsuariosSelector.getUsuario)

  constructor(
    private store: Store<IAppState>
    ){

    }

  ngOnInit(): void {
    this.store.dispatch(fromUsuariosAction.loadUsuarios())

    }

    editar(id:number){
      this.store.dispatch(fromUsuariosAction.loadUsuario({payload:id}))

    }



      excluir(id:number){
        this.store.dispatch(fromUsuariosAction.deleteUsuario({payload:id}))
      }



}
