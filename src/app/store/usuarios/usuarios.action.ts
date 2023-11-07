import { createAction, props } from '@ngrx/store';
import { IUsuario } from 'src/app/models/usuarioModel';

export const enum usuariosTypeActions {
  LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
  LOAD_USUARIOS_SUCESS = '[LOAD_USUARIOS_SUCESS] LOAD USUARIOS SUCESS',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

  LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
  LOAD_USUARIO_SUCESS = '[LOAD_USUARIO_SUCESS] LOAD USUARIO SUCESS',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',

  CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO',
  CREATE_USUARIO_SUCESS = '[CREATE_USUARIO_SUCESS] CREATE USUARIO SUCESS',
  CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE USUARIO FAIL',

  UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO',
  UPDATE_USUARIO_SUCESS = '[UPDATE_USUARIO_SUCESS] UPDATE USUARIO SUCESS',
  UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE USUARIO FAIL',

  DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO',
  DELETE_USUARIO_SUCESS = '[DELETE_USUARIO_SUCESS] DELETE USUARIO SUCESS',
  DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE USUARIO FAIL',
}

//Load usuarios

export const loadUsuarios = createAction(usuariosTypeActions.LOAD_USUARIOS);
export const loadUsuariosSucess = createAction(
  usuariosTypeActions.LOAD_USUARIOS_SUCESS,
  props<{ payload: IUsuario[] }>()
);
export const loadUsuariosFail = createAction(
  usuariosTypeActions.LOAD_USUARIOS_FAIL,
  props<{ error: string }>()
);


//Load usuario

export const loadUsuario = createAction(usuariosTypeActions.LOAD_USUARIO,
  props<{ payload: number }>()
    );
export const loadUsuarioSucess = createAction(
  usuariosTypeActions.LOAD_USUARIO_SUCESS,
  props<{ payload: IUsuario }>()
);
export const loadUsuarioFail = createAction(
  usuariosTypeActions.LOAD_USUARIO_FAIL,
  props<{ error: string }>()
);


//Create usuario


export const updateUsuario = createAction(usuariosTypeActions.UPDATE_USUARIO,
  props<{ payload: IUsuario }>()
    );
export const updateUsuarioSucess = createAction(
  usuariosTypeActions.UPDATE_USUARIO,
  props<{ payload: IUsuario }>()
);
export const updateUsuarioFail = createAction(
  usuariosTypeActions.UPDATE_USUARIO_FAIL,
  props<{ error: string }>()
);

//Update usuario


export const createUsuario = createAction(usuariosTypeActions.CREATE_USUARIO,
  props<{ payload: IUsuario }>()
    );
export const createUsuarioSucess = createAction(
  usuariosTypeActions.CREATE_USUARIO,
  props<{ payload: IUsuario }>()
);
export const createUsuarioFail = createAction(
  usuariosTypeActions.CREATE_USUARIO_FAIL,
  props<{ error: string }>()
);

//Delete usuario


export const deleteUsuario = createAction(usuariosTypeActions.DELETE_USUARIO,
  props<{ payload: number }>()
    );
export const deleteUsuarioSucess = createAction(
  usuariosTypeActions.DELETE_USUARIO,
  props<{ payload: number }>()
);
export const deleteUsuarioFail = createAction(
  usuariosTypeActions.DELETE_USUARIO_FAIL,
  props<{ error: string }>()
);

