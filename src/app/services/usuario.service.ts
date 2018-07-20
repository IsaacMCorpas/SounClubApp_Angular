
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
    private _usuario;
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
  
    getUsuarioById(uid: number):Observable<Usuario> {
      let usuarioBuscado:Usuario;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'token':this._AuthService.getToken(),
        })
      }; 
      
      let urlUsuario=this._apiUsuario+'/'+uid;
      console.log("Error en el buscador ::",urlUsuario);
      return this._httpClient.get<Usuario>(urlUsuario,httpOptions)
      .pipe(
        tap( data=>{
          //usuarioBuscado=data;
          console.log("Error en el buscador ::",data);
        },
        error=>console.log('Error en Usuario.service ::',error)
        )
      );

    }


    addUsuario(userAdd: Usuario):Observable<Usuario>{
      console.log(userAdd);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'token':this._AuthService.getToken(),
        })
      }; 
      
      return this._httpClient.post<Usuario>(this._apiUsuario,userAdd,httpOptions)
      .pipe(
        tap(data => { 
          //falta poner dato
        },
        error => console.log('error:', error)
        )
      );
      
      
    }
    
    actualizarUsuario(userUpdate: Usuario){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'token':this._AuthService.getToken(),
        })
      }; 

      let urlUsuario=this._apiUsuario+'/'+userUpdate.id;
      return this._httpClient.post<any>(this._apiUsuario,userUpdate,httpOptions)
      .pipe(
        tap(data => { 
          //falta poner dato
        },
        error => console.log('error:', error)
        )
      );

    }

    
  };
