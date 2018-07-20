import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { Pais } from '../modelos/pais';
import { UsuarioService } from '../services/usuario.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { PaisService } from '../services/pais.service';
import { Instrumento } from '../modelos/instrumento';
import { Genero_Musical } from '../modelos/genero_musical';
import { GenerosService } from '../services/genero-musical.service';
import { InstrumentoService } from '../services/instrumento.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  unUsuario: Usuario = new Usuario (0, "","","","",);
  paises: Pais[];
  instrumentos: Instrumento[];
  generos_musicales: Genero_Musical[];

  constructor(private _usuarioService:UsuarioService,private _paisService:PaisService , private _generosService:GenerosService,private _instrumentosService: InstrumentoService ,private _httpClient: HttpClient, private _router:Router) { }

  ngOnInit() {
    this._instrumentosService.getInstrumentosFromApi().subscribe(losInstrumentos=>
      {this.instrumentos=losInstrumentos;}
    );
    this._generosService.getGenerosMusicalesFromApi().subscribe(losGeneros=>
      {this.generos_musicales=losGeneros;}
    );
    
    this._paisService.getPaisesFromApi().subscribe(losPaises=>
      {this.paises=losPaises;}
    );
    this._usuarioService.getUsuarioById(1).subscribe(elUsuario=>
      {this.unUsuario=elUsuario;}
    );
    
    
  }
  
  onSubmit(myForm:NgForm){
    if(myForm.valid){
      this._usuarioService.actualizarUsuario(this.unUsuario).subscribe(elUsuario=>{this.unUsuario=elUsuario});
      
    }
  }
}
