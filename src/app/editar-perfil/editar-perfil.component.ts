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
  unUsuario: Usuario = new Usuario (0, "","","","",);
  

  constructor(private _usuarioService:UsuarioService, private _httpClient: HttpClient, private _router:Router) { }

  ngOnInit() {
    this._usuarioService.getUsuarioById(5).subscribe(elUsuario=>
      {this.unUsuario=elUsuario;}
    );
    
  }
  
  onSubmit(editForm:NgForm){
    if(editForm.valid){console.log(this.unUsuario)
      
    }
  }
}
