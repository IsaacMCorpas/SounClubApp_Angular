import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datos-usuario-busqueda',
  templateUrl: './datos-usuario-busqueda.component.html',
  styleUrls: ['./datos-usuario-busqueda.component.css']
})
export class DatosUsuarioBusquedaComponent implements OnInit {
usuario:Usuario;
idUsuario:number;
checked:boolean=true;
  constructor(private _usuarioService:UsuarioService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      this.idUsuario=params['uid'];
    });

    this._usuarioService.getUsuarioById(this.idUsuario).subscribe(usuarioPrometido=>{
      this.usuario=usuarioPrometido;
    });

  }

}
