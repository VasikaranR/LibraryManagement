import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }
  
  name:string="vasi";
  password1:string='';
  ngOnInit(): void {
    
  }
  adminLog(){
    this.router.navigate(['/dashboard']);
  }

}
