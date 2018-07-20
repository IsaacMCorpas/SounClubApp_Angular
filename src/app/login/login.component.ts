import { Component, OnInit } from '@angular/core';

import{ Usuario } from '../modelos/usuario'
import {  } from '../services/usuario.service';
import { NgForm, FormBuilder } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // logForm: FormGroup;
  loading = false;
  submitted = false;
  usuario: Usuario = new Usuario(0,"","","","");
  errorForm: boolean = false;
  errorServer: boolean = false;

  constructor(private _authService: AuthService, private _router:Router) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm, this.usuario);
    if (loginForm.valid) {
      this._authService.getUsuarioTokenFromAPI(this.usuario).subscribe(
        token => { this._router.navigate(['/login']) },
        error => { this.errorServer = true; }
      );
    } else {
      this.errorForm = true;
    }
  }

}

