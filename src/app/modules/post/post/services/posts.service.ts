import {Injectable} from '@angular/core';
import {Posts} from "../model/posts";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.url)
  }
  getPost(id: string): Observable<Posts> {
    return this.httpClient.get<Posts>(this.url+ '/' + id)
  }
}
