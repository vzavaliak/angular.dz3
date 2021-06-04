import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Users} from "../../model/users";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user:Users

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
  this.activatedRoute.params.subscribe(param=>{
    this.user = this.router.getCurrentNavigation()?.extras.state as Users
  })
  }

  ngOnInit(): void {
  }

}
