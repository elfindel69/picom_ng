import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: BehaviorSubject<string>
  constructor(private http:HttpClient) {
    this.token = new BehaviorSubject<string>("");
  }

  login(email: string, password: string):Promise<any> {
    return this.http.post("http://localhost:8000/login",{email,password}
    ).toPromise().then((resp:any) =>{this.token.next(resp)});
  }

  logout():Promise<void>{
    return new Promise<void>((res, rej) =>{
      this.token.next('');
      res();
    })
  }
}
