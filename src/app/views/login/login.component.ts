import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";

  constructor(private authService: AuthService,private router:Router) {
  }

  ngOnInit(): void {
  }

  OnSubmitLoginForm(form:NgForm):void {
    if(form.valid) {
      this.authService.login(this.email,this.password).then(() => {
        this.router.navigateByUrl("client/index");
      });
    }

  }

}
