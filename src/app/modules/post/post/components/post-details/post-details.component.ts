import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";
import {Posts} from "../../model/posts";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
 post:Posts
  constructor(private postsService:PostsService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>{
      this.postsService.getPost(params.id).subscribe(value => this.post = value)
    })
  }

  ngOnInit(): void {
  }

}
