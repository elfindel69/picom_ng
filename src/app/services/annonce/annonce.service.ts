import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Annonce} from "../../models/Annonce";
import {map} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private httpClient: HttpClient,private router: Router) { }

  getAnnonces(email: string):Promise<Array<Annonce> | undefined> {
    const options = {headers:new HttpHeaders       ({
        'Access-Control-Allow-Origin':'*'
      })}
    return this.httpClient.get("http://localhost:8080/annonces/"+email, options)
      .pipe(map((data: any) => data.map((data: any) => Annonce.fromJSON(data))))
      .toPromise()

  }

  delete(id: number):Promise<any> {
    const options = {headers:new HttpHeaders       ({
        'Access-Control-Allow-Origin':'*'
      })}
    return this.httpClient.delete("http://localhost:8080/annonces/"+id,options)
        .toPromise()

  }
}
