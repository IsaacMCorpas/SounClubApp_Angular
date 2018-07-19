import { Injectable } from '@angular/core';
import { Instrumento } from '../modelos/instrumento';
import { Observable } from '../../../node_modules/rxjs';
import { HttpHeaders, HttpClient } from '../../../node_modules/@angular/common/http';
import { tap } from '../../../node_modules/rxjs/operators';
import { Router } from '../../../node_modules/@angular/router';
import { of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class InstrumentoService {


  private _instrumentosStore: Instrumento[];
  private _apiInstrumento: string ='http://localhost:8080/SoundClubApp/api/Instrumento';
  private _instrumentosObs: Observable<Instrumento[]>;

  constructor(private _httpClient: HttpClient, private _router: Router,private _authService:AuthService) { }


  getIntrumentos(): Instrumento[] {

    return this._instrumentosStore;
  }

  getInstrumentoById(iid: number): Instrumento {

    return this._instrumentosStore.find((unIns: Instrumento) => (unIns.iid == iid));
  }

  getInstrumentosFromApi(): Observable<Instrumento[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._authService.getToken()
      })
    };

    if (this._instrumentosStore) {
      this._instrumentosObs = of(this._instrumentosStore);
    } else if (this._instrumentosStore) {

    } else {
      this._instrumentosObs = this._httpClient.get<Instrumento[]>(this._apiInstrumento, httpOptions)
        .pipe(
          tap(
            data => this._instrumentosStore = data,
            error => { console.log('error:', error); this._router.navigate(['/login']); }
          )
        );
    }
    return this._instrumentosObs

  }

}
