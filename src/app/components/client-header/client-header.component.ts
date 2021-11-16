import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Client} from "../../models/Client";
import {ClientService} from "../../services/client/client.service";

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {
  token:string;
  email:string|undefined;
  tokenSub:Subscription;
  emailClientSub: Subscription;
  client:Client | undefined;
  constructor(private authService:AuthService, private router: Router,private clientService:ClientService) {
    this.token = '';
    this.tokenSub = new Subscription();
    this.emailClientSub = new Subscription();
    this.client = new Client('','','','',new Date(),'',[],[])
  }

  ngOnInit(): void {
    this.tokenSub = this.authService.token.subscribe((token:string) =>this.token = token);
    this.emailClientSub = this.authService.clientEmail.subscribe(
      (clientEmail:string)=>this.email = clientEmail );
    if(this.email){
      this.clientService.getClient(this.email).then((client:Client|undefined) =>this.client = client);
    }

  }
  onClickLogout() {
    this.authService.logout().then(()=>{this.router.navigateByUrl('')})
  }
  ngOnDestroy(): void {
    this.tokenSub.unsubscribe();
  }

}
