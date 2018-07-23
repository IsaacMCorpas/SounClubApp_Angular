import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../services/usuario.service';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-usuario-buscado',
  templateUrl: './lista-usuario-buscado.component.html',
  styleUrls: ['./lista-usuario-buscado.component.css']
})
export class ListaUsuarioBuscadoComponent implements OnInit {
  listaUsuarios:Usuario[];
  nombreABuscar:string;



  constructor(private _usuarioService:UsuarioService, private _authService:AuthService, private _route:ActivatedRoute) { }

  ngOnInit() {

    this._route.params.subscribe(pathparams=>{
      this.nombreABuscar=pathparams['nombre'];
    });

    this._usuarioService.getUsuariosBuscados(this.nombreABuscar).subscribe(lista => {
        this.listaUsuarios = lista;
    });

    }
}


