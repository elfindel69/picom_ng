import { Injectable } from '@angular/core';
import {Client} from "../../models/Client";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  getClient(email: string):Promise<Client|undefined> {
    const options = {headers:new HttpHeaders       ({
        'Access-Control-Allow-Origin':'*'
      })}
    return this.httpClient.get("http://localhost:8080/clients/" + email, options)
      .pipe(map((data: any) => Client.fromJSON(data)))
      //transformation de l'observable en promise
      .toPromise();
  }
}
