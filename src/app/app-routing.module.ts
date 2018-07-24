import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {EditarPerfilComponent} from './editar-perfil/editar-perfil.component';
import {RegistroComponent} from './registro/registro.component';
import {ListaAmigoComponent} from './lista-amigo/lista-amigo.component'
import { ListaUsuarioBuscadoComponent } from './lista-usuario-buscado/lista-usuario-buscado.component';
import { DatosUsuarioBusquedaComponent } from './datos-usuario-busqueda/datos-usuario-busqueda.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'editarperfil', component: EditarPerfilComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent, pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent, pathMatch: 'full' },
  { path: 'listaamigos', component: ListaAmigoComponent, pathMatch: 'full' },
  { path: 'usuario/:uid', component: DatosUsuarioBusquedaComponent, pathMatch: 'full' },
  { path: 'resultadoBusqueda/:name', component: ListaUsuarioBuscadoComponent, pathMatch: 'full' },

  { path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
