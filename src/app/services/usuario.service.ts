
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
   // private _apiUsuarios: string = '';
    private _usuarioObs: Observable<Usuario[]>;
  
    constructor(private _httpClient: HttpClient, private _router:Router) {
  
    }
  
    getUsuarios(): Usuario[] {
      return this._usuarioStore;
    }
  
    getUsuarioById(uid: number): Usuario {
      return this._usuarioStore.find((aT: Usuario) => (aT.uid == uid));
    }
  }