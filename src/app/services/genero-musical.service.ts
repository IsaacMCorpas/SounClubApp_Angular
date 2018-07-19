import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '../../../node_modules/@angular/router';
import{Genero_Musical} from '../modelos/genero_musical'

@Injectable()
export class TareasService {

  private _generoMusicalStore: Genero_Musical[];
  // private _apiGeneroMusical: string = '';
  private _generoMusicalObs: Observable<Genero_Musical[]>;

  constructor(private _httpClient: HttpClient, private _router:Router) {

  }

  getGenerosMusicales(): Genero_Musical[] {
    return this._generoMusicalStore;
  }

  getGenerosMusicalesById(mid: number): Genero_Musical {
    return this._generoMusicalStore.find((aT: Genero_Musical) => (aT.mid == mid));
  }
}