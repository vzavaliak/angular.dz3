import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../model/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private  url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient:HttpClient) {

  }
  getUser():Observable<Users[]>{
   return this.httpClient.get<Users[]>(this.url)
  }
}
