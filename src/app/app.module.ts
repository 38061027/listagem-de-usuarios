import { appEffects, appReducer } from './store/app-state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from'@angular/common/http';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MainComponent } from './main/main.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListaUsuariosAdminComponent } from './lista-usuarios-admin/lista-usuarios-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    MainComponent,
    CadastroUsuariosComponent,
    ListaUsuariosAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
