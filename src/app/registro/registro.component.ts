import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import{ Usuario } from '../modelos/usuario'
import { UsuarioService} from '../services/usuario.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  regiForm: FormGroup;
  usuario:Usuario = new Usuario(0,"","","","");



  constructor(private _usuariosService:UsuarioService, private router: Router,private formBuilder: FormBuilder ) { }


// convenience getter for easy access to form fields
get f() { return this.regiForm.controls; }

  ngOnInit() {
  }
  
  onSubmit(regiForm:NgForm){
   
    if(this.regiForm.invalid){
      return;
    }
      this._usuariosService.addUsuario(this.regiForm.value)
      .subscribe(
        data=>{
          this.router.navigate(['/login']);
          console.log("dame un usuario=",this.regiForm.value);
        },

  );
  
    }
  }
  


