import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '../../../node_modules/@angular/router';
import{Genero_Musical} from '../modelos/genero_musical'
import { AuthService } from './auth.service';

@Injectable()
export class GenerosService {

  private _generoMusicalStore: Genero_Musical[];
  private _apiGeneroMusical: string = 'http://localhost:8080/SoundClubApp/api/genero_musical';
  private _generoMusicalObs: Observable<Genero_Musical[]>;

  constructor(private _httpClient: HttpClient,private _authService:AuthService, private _router:Router) {

  }

  getGenerosMusicalesFromApi(): Observable<Genero_Musical[]> {
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
        'token': this._authService.getToken()
      })
     };

    if (this._generoMusicalStore) {
      this._generoMusicalObs = of(this._generoMusicalStore);
    } else if (this._generoMusicalObs) {
      //observable ya está en curso
    } else {
      this._generoMusicalObs = this._httpClient.get<Genero_Musical[]>(this._apiGeneroMusical,httpOptions)
        .pipe(
          tap(
            data => this._generoMusicalStore = data,
            error => {console.log('error:', error); this._router.navigate(['/login']);}
          )
        );
    }

    return this._generoMusicalObs;
  }

  getGenerosMusicalesById(mid: number): Genero_Musical {
    return this._generoMusicalStore.find((aT: Genero_Musical) => (aT.mid == mid));
  }
}