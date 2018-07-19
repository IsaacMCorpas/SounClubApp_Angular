import { Component, OnInit } from '@angular/core';

import{ Usuario } from '../modelos/usuario'
import {  } from '../services/usuario.service';
import { NgForm } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario= new Usuario();


  constructor() { }

  ngOnInit() {
  
  }

  onSubmit(logForm: NgForm){
    if(logForm.valid){
    
    }
  }


}