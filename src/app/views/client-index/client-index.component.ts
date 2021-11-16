import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/models/Annonce';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';
import {AuthService} from "../../services/auth/auth.service";
import {Subscription} from "rxjs";
import {Client} from "../../models/Client";
import {ClientService} from "../../services/client/client.service";

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})
export class ClientIndexComponent implements OnInit {

  email:string|undefined;
  emailClientSub: Subscription;
  annonces: Array<Annonce> | undefined;
  private client: Client | undefined;

  constructor(private annonceService:AnnonceService,private router:Router,private authService:AuthService,
              private clientService: ClientService) {
    this.emailClientSub = new Subscription();

  }

  ngOnInit(): void {
    this.emailClientSub = this.authService.clientEmail.subscribe(
      (clientEmail:string)=>this.email = clientEmail );
    if(this.email){
      console.log(this.email);
      this.annonceService.getAnnonces(this.email).then((annonces:Array<Annonce>|undefined) =>{
        this.annonces = annonces; console.log(this.annonces);});
      this.clientService.getClient(this.email).then((client:Client|undefined) =>this.client = client);
    }

  }

  onClickDeleteBtn(id:number|undefined):void {
    if(id && id > 0){
      this.annonceService.delete(id).then(()=>window.location.reload());
    }
  }
}
