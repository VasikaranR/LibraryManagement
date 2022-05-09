import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor(private router:Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  table(){
    this.router.navigate(['/dashboard']);
  }
}
>>>>>>> bc41583a9cfe91986ce9aed2714d8c3c385149e4
