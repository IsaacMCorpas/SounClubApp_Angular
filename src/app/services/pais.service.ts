import { Injectable } from '@angular/core';
import { Pais } from '../modelos/pais'
import { Observable } from '../../../node_modules/rxjs';
import { Router } from '../../../node_modules/@angular/router';
import { of } from 'rxjs';
import { tap } from '../../../node_modules/rxjs/operators';
import { HttpHeaders, HttpClient } from '../../../node_modules/@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class PaisService {

  private _paisesStore: Pais[];
  private _apiPaises:string= 'http://localhost:8080/SoundClubApp/api/pais';
  private _paisesObs:Observable<Pais[]>;

  constructor(private _httpClient: HttpClient, private _router: Router,private _authService:AuthService) { }


  getPaises(): Pais[]{

     return this._paisesStore;
  }

  getPaisById(cid:number):Pais{

    return this._paisesStore.find((unPa:Pais)=>(unPa.cid==cid));
  }

  getPaisesFromApi(): Observable<Pais[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._authService.getToken()
      })
    };

    if (this._paisesStore) {
      this._paisesObs = of(this._paisesStore);
    } else if (this._paisesStore) {

    } else {
      this._paisesObs = this._httpClient.get<Pais[]>(this._apiPaises, httpOptions)
        .pipe(
          tap(
            data => this._paisesStore = data,
            error => { console.log('error:', error); this._router.navigate(['/login']); }
          )
        );
    }
    return this._paisesObs

  }
}