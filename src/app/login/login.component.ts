import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }
  name:string="vasi";
  password1:string='';
  email1:string='';
  ngOnInit(): void {
  }
  userLog(){
    this.router.navigate(['/dashboard']);
  }
  adminLog(){
    this.router.navigate(['/dashboard']);
  }
}