import { Injectable } from '@angular/core';
import { Instrumento } from '../modelos/instrumento';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class InstrumentoService {

  private _instrumentosStore: Instrumento[];
  private _apiInstrumentos:string= '';
  private _instrumentosObs:Observable<Instrumento[]>;

  constructor() { }


  getIntrumentos(): Instrumento[]{

     return this._instrumentosStore;
  }

  getInstrumentoById(iid:number):Instrumento{

    return this._instrumentosStore.find((unIns: Instrumento)=> (unIns.iid==iid));
  }

}
