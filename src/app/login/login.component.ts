import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  table(){
    this.router.navigate(['/dashboard']);
  }
}
