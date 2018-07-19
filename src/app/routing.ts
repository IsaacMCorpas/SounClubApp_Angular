import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {EditarPerfilComponent} from './editar-perfil/editar-perfil.component';
import {RegistroComponent} from './registro/registro.component';
import {ListaAmigoComponent} from './lista-amigo/lista-amigo.component'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'editarperfil', component: EditarPerfilComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent, pathMatch: 'full' },
  { path: 'listaamigos', component: ListaAmigoComponent, pathMatch: 'full' },
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routingProv: ModuleWithProviders = RouterModule.forRoot(appRoutes);