import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromUsuariosSelector from '../store/usuarios/usuarios.reducer';
import { IUsuario } from '../models/usuarioModel';
import { IAppState } from '../store/app-state';


@Component({
  selector: 'app-lista-usuarios-admin',
  templateUrl: './lista-usuarios-admin.component.html',
  styleUrls: ['./lista-usuarios-admin.component.css']
})
export class ListaUsuariosAdminComponent {

  listaUsuarios$: Observable<IUsuario[]> = this.store.select(fromUsuariosSelector.getUsuariosAdministradores)

constructor(private store: Store<IAppState>){}

}
