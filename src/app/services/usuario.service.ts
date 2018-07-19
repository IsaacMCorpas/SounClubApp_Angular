
  import { Injectable } from '@angular/core';

  import { Usuario } from '../modelos/usuario';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  import { of } from 'rxjs';
  import { Router } from '../../../node_modules/@angular/router';
import { AuthService } from './auth.service';
  
  @Injectable()
  export class UsuarioService {
  
    
    private _usuarioStore: Usuario[];
    //private _apiUsuarios: string = 'http://www.mocky.io/v2/5b50a3c53600005600dd0f55';
    private _apiUsuario: string ='http://localhost:8080/SoundClubApp/api/usuario';
    private _usuarioObs: Observable<Usuario[]>;
    private _tokenusuarioObservable:string;  
    constructor(private _httpClient: HttpClient, private _router:Router,private _AuthService:AuthService) {
  
    }
    ngOnInit(){ 
    }
  

  
  getUsuariosFromAPI(): Observable<Usuario[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'token':this._AuthService.getToken(),
      })
    }; 
    if(this._usuarioStore){
      this._usuarioObs=of(this._usuarioStore);
    }else if(this._usuarioObs){

    }else{
      this._usuarioObs=this._httpClient.get<Usuario[]>(this._apiUsuario,httpOptions)
      .pipe(
        tap( data=>{
          this._usuarioStore=data;
          localStorage.setItem('usuario',JSON.stringify(this._usuarioStore));
        },
        error=>console.log('Error en Usuario.service ::',error)
        )
      );
    }
    return this._usuarioObs;

  }
  
    getUsuarioById(uid: number): Usuario {

      return this._usuarioStore.find((aT: Usuario) => (aT.uid == uid));
    }


    addUsuario(nuevoUsuario: Usuario){
      console.log(nuevoUsuario.apellidos);
     
      nuevoUsuario.uid=5;
      this._usuarioStore.push(nuevoUsuario);
      
      
    }
    

    
  };
