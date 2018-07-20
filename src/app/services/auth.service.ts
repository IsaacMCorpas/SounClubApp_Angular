import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Usuario } from '../modelos/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _apiAuth: string = 'http://localhost:8080/SoundClubApp/api/auth';
  private _token:string='';

  constructor(private _httpClient:HttpClient) { }

  getUsuarioTokenFromAPI(usuario:Usuario):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'email': usuario.email,
        'password': usuario.password,
      })
    };
    return this._httpClient.get<any>(this._apiAuth,httpOptions)
    .pipe(
      tap(data=>{if(data){
        this._token=data.token;
        //localStorage.setItem("token",JSON.stringify(this._tokenusuarioObservable));
        console.log("Este es el token",data);
      }
      error=>(console.log(error)); 
      })
    );
  
  }
  
  getToken():string{
    return "";//this._token;
  }

}
