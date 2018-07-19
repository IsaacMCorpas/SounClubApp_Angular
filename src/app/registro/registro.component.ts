import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import{ Usuario } from '../modelos/usuario'
import { UsuarioService} from '../services/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsu:Usuario = new Usuario(0,"","","is@is.es","XXX");
  
  constructor(private _usuariosService:UsuarioService) { }

  ngOnInit() {
  }
  onSubmit(regForm:NgForm){
    console.log(regForm,this.nuevoUsu);
    if(regForm){
      let isOK = this._usuariosService.addUsuario(this.nuevoUsu);
    
    }
  }
}

