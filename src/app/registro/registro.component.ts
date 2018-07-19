import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import{ Usuario } from '../modelos/usuario'
import { UsuarioService} from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  newUsuario:Usuario = new Usuario(0,"Isaac","Mesa","is@is.es","1234","1234");
  
  constructor(private _usuariosService:UsuarioService, ) { }

  ngOnInit() {
  }
  onSubmit(regiForm:NgForm){
   
    if(regiForm){
      let isOK = this._usuariosService.addUsuario(this.newUsuario);
    
      console.log("dame un usuario="+this.newUsuario);
    }
  }
}

