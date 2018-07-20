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


  ngOnInit(){
  //   this.regiForm = this.formBuilder.group({
  //     nombre: ['', Validators.required],
  //     apellidos: ['', Validators.required],
  //     email: ['', Validators.required],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  // });
  }
  
  onSubmit(myForm:NgForm){
    if(myForm.valid){
      this._usuariosService.addUsuario(this.usuario)
      .subscribe(
        data=>{
          console.log(this.usuario)
        this.router.navigate(['/login']);
          
        },

  );
  
    }
  }
  
}

