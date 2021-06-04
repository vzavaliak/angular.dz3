import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../../model/users";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  @Input()
  user:Users
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToUserDetails(): void{
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state:this.user})
  }

}
