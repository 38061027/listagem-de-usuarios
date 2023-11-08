import { ActionReducerMap } from "@ngrx/store";
import { IUsuariosState, usuarioReducer } from "./usuarios/usuarios.reducer";
import { UsuariosEffects } from "./usuarios/usuarios.effects";

export interface IAppState{

usuarios: IUsuariosState

}

export const appReducer: ActionReducerMap<IAppState> = {
  usuarios: usuarioReducer
}

export const appEffects = [
  UsuariosEffects,
  
]
