import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { Pais } from '../modelos/pais';
import { UsuarioService } from '../services/usuario.service';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  usuario:Usuario = new Usuario(0, "Isaac", "Mesa", "is@is.com", "1234", "");
  unPais: Pais = new Pais (0, "AFG", "Afganistan");

  constructor(private _usuarioService:UsuarioService, private _httpClient: HttpClient, private _router:Router) { }

  ngOnInit() {
    // this._usuarioService.getUsuarioById(this.usuario.uid).subscribe(losUsuarios=>
    //   {this.usuario=losUsuarios;}
    // );
  }
  onSubmit(editForm:NgForm){
    if(editForm.valid){console.log(this.usuario)
      
    }
  }
}
