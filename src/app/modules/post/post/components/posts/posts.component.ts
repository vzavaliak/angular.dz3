import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Posts} from "../../model/posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 post:Posts[]
  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.post = value )
  }

}
