import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { MenuComponent } from './header/menu/menu.component';
import { BuscarComponent } from './header/buscar/buscar.component';
import { ListaUsuarioBuscadoComponent } from './lista-usuario-buscado/lista-usuario-buscado.component';
import { DatosUsuarioBusquedaComponent } from './datos-usuario-busqueda/datos-usuario-busqueda.component';
import { ListaAmigoComponent } from './lista-amigo/lista-amigo.component';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    LoginComponent,
    RegistroComponent,
    EditarPerfilComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    BuscarComponent,
    ListaUsuarioBuscadoComponent,
    DatosUsuarioBusquedaComponent,
    ListaAmigoComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
