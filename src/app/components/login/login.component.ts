import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { debug } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.username,this.password);
    this.router.navigateByUrl("pets")
  }
}
