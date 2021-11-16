import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: BehaviorSubject<string>
  clientEmail: BehaviorSubject<string>
  constructor(private http:HttpClient) {
    this.token = new BehaviorSubject<string>("");
    this.clientEmail = new BehaviorSubject<string>("")
  }

  login(email: string, password: string):Promise<any> {
    const options = {headers:new HttpHeaders       ({
      'Access-Control-Allow-Origin':'*'
    })}
    return this.http.post("http://localhost:8080/clients/login",{email,password},options
    ).toPromise().then((resp:any) =>{this.token.next(resp); this.clientEmail.next(email)});
  }

  logout():Promise<void>{
    return new Promise<void>((res, rej) =>{
      this.token.next('');
      res();
    })
  }
}
