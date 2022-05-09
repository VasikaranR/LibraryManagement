import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-library-dash',
  templateUrl: './library-dash.component.html',
  styleUrls: ['./library-dash.component.scss']
})
export class LibraryDashComponent implements OnInit {
  userList: User[] = [];

  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();

  }
  table(){
    this.router.navigate(['/user']);
  }
  view(){
    this.router.navigate(['/buy']);

  }

}
