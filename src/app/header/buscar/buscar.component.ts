import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
nameToFind:string;
listaUsuarios:Usuario[];
unUsuario:Usuario;
  constructor(private _usuariosService:UsuarioService) { }

  ngOnInit() {

  }

  onSubmit(form:NgForm){
    if(form.valid){
      console.log(this.nameToFind);
      //this.usuarioEncontrados=this._usuariosService.getUsuarios();
      console.log(this.listaUsuarios);

    }
  }

  buscarAmigos(nameToFind){
    if(nameToFind!=null && nameToFind!=""){
    console.log("nombre a buscar",nameToFind);
    this._usuariosService.getUsuariosBuscados(nameToFind).subscribe(
      lista=>{
        this.listaUsuarios=lista;
      }
    );
    }else{
      this.listaUsuarios=null;
    }

  }


}
