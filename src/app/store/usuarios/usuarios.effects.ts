import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioServiceService } from 'src/app/repository/usuario-service.service';
import * as fromUsuariosAction from './usuarios.action';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private service: UsuarioServiceService
  ) {}

  loadUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeActions.LOAD_USUARIOS),
      exhaustMap(() =>
        this.service.getUsuarios().pipe(
          map(
            (payload) => fromUsuariosAction.loadUsuariosSucess({ payload }),
            catchError((error) =>
              of(fromUsuariosAction.loadUsuariosFail({ error }))
            )
          )
        )
      )
    )
  );


  loadUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeActions.LOAD_USUARIO),
      exhaustMap((record:any) =>
        this.service.getUsuario(record.payload).pipe(
          map(
            (payload) => fromUsuariosAction.loadUsuarioSucess({ payload }),
            catchError((error) =>
              of(fromUsuariosAction.loadUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );



  createUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeActions.CREATE_USUARIO),
      exhaustMap((record:any) =>
        this.service.addUsuario(record.payload).pipe(
          map(
            (payload) => fromUsuariosAction.createUsuarioSucess({ payload }),
            catchError((error) =>
              of(fromUsuariosAction.createUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );


  updateUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeActions.UPDATE_USUARIO),
      exhaustMap((record:any) =>
        this.service.updateUsuario(record.payload).pipe(
          map(
            (payload) => fromUsuariosAction.updateUsuarioSucess({ payload }),
            catchError((error) =>
              of(fromUsuariosAction.updateUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );


  deleteUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeActions.DELETE_USUARIO),
      exhaustMap((record:any) =>
        this.service.deleteUsuario(record.payload).pipe(
          map(
            () => fromUsuariosAction.deleteUsuarioSucess({ payload:record.payload }),
            catchError((error) =>
              of(fromUsuariosAction.deleteUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );
}
