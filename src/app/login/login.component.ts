import { Component, OnInit } from '@angular/core';

import{ Usuario } from '../modelos/usuario'
import { LogoutService } from '../services/logout.service';
import { NgForm } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  


  constructor() { }

  ngOnInit() {
  
  }

}