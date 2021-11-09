import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {
  token:string;
  tokenSub:Subscription
  constructor(private authService:AuthService, private router: Router) {
    this.token = '';
    this.tokenSub = new Subscription();
  }

  ngOnInit(): void {
    this.tokenSub = this.authService.token.subscribe((token:string) =>this.token = token);

  }
  onClickLogout() {
    this.authService.logout().then(()=>{this.router.navigateByUrl('')})
  }
  ngOnDestroy(): void {
    this.tokenSub.unsubscribe();
  }

}
