import { Component, OnInit } from '@angular/core';

import{ Usuario } from '../modelos/usuario'
import {  } from '../services/usuario.service';
import { NgForm, FormBuilder } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // logForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;



  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.logForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    };
 
    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
//     this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/';
// }

// convenience getter for easy access to form fields
// get f() { return this.loginForm.controls; }

  }

  // onSubmit(logForm: NgForm){
  //   if(this.logForm.invalid){
  //   return;
  //   }
  //   this.authenticateService.login(this.name.value, this.apellidos.value, this.email.value, password.value)
  
  //   .subscribe(
  //     data=>{
  //       this.router.navigate([this.returnURL]);
  //     },
  
  // }


