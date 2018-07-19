import { Injectable } from '@angular/core';
import { Pais } from '../modelos/pais'
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class PaisService {

  private _paisesStore: Pais[];
  private _apiPaises:string= '';
  private _paisesObs:Observable<Pais[]>;

  constructor() { }


  getPaises(): Pais[]{

     return this._paisesStore;
  }

  getPaisById(cid:number):Pais{

    return this._paisesStore.find((unPa:Pais)=>(unPa.cid==cid));
  }

}