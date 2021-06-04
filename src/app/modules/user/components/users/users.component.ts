import { Component, OnInit } from '@angular/core';
import {UserService} from "../../survice/user.service";
import {Users} from "../../model/users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user:Users[]=[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(value => this.user = value)
  }

}
