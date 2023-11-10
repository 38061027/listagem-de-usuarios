import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { IUsuario } from 'src/app/models/usuarioModel';
import * as fromUsuariosAction from '../usuarios/usuarios.action';

export interface IUsuariosState {
  usuarios: IUsuario[];
  usuario: IUsuario | null;
  error: string | '';
}

export const initialState: IUsuariosState = {
  usuarios: [],
  usuario: null,
  error: '',
};

const _usuarioReducer = createReducer(
  initialState,
  on(fromUsuariosAction.loadUsuariosSucess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
  })),
  on(fromUsuariosAction.loadUsuariosFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.loadUsuarioSucess, (state, { payload }) => ({
    ...state,
    usuario: payload,
    error: '',
  })),
  on(fromUsuariosAction.loadUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.createUsuarioSucess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload],
    error: '',
  })),
  on(fromUsuariosAction.createUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.updateUsuarioSucess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => {
      if (row.id == payload.id) {
        return payload;
      } else {
        return row;
      }
    }),
    error: '',
  })),



  on(fromUsuariosAction.deleteUsuarioSucess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((user) => { return user.id !== payload}),
    error: '',
  })),
  on(fromUsuariosAction.deleteUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
);

export function usuarioReducer(state = initialState, action: Action) {
  return _usuarioReducer(state, action);
}



const getUsuariosFeatureState = createFeatureSelector<IUsuariosState>(
  'usuarios'
)


export const getUsuarios = createSelector(
  getUsuariosFeatureState,
  (state:IUsuariosState) => state.usuarios
)


export const getUsuario = createSelector(
  getUsuariosFeatureState,
  (state:IUsuariosState) => state.usuario
)


export const getUsuariosAdministradores = createSelector(
  getUsuariosFeatureState,
  (state:IUsuariosState) => state.usuarios.filter((filter)=> filter.perfil == 'Administrador')
)

export const getUsuarioError = createSelector(
  getUsuariosFeatureState,
  (state:IUsuariosState) => state.error
)
