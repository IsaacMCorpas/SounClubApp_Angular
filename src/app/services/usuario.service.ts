
  import { Injectable } from '@angular/core';

  import { Usuario } from '../modelos/usuario';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  import { of } from 'rxjs';
  import { Router } from '../../../node_modules/@angular/router';
  
  @Injectable()
  export class UsuarioService {
  
    private _usuarioStore: Usuario[];
    private _apiUsuarios: string = 'http://www.mocky.io/v2/5b50a3c53600005600dd0f55';
    private _usuarioObs: Observable<Usuario[]>;
  
    constructor(private _httpClient: HttpClient, private _router:Router) {
  
    }
    ngOnInit(){
      if(this._usuarioStore==null){
        this._usuarioStore=JSON.parse(this._apiUsuarios);
      }
      console.log(this._usuarioStore);
      
    }
  
    getUsuarios(): Usuario[] {
      return this._usuarioStore;
    }
  
    getUsuarioById(uid: number): Usuario {

      return this._usuarioStore.find((aT: Usuario) => (aT.uid == uid));
    }


    addUsuario(nuevoUsuario: Usuario):boolean{
      nuevoUsuario.uid=5;
      console.log(nuevoUsuario);
      this._usuarioStore.push(nuevoUsuario);
      return true;
    }
  }
