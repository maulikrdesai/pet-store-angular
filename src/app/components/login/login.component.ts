import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { ApiGatewayService } from '../../services/api-gateway.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(private router: Router, private apiGatewayService: ApiGatewayService, private authService:AuthService) { }

  ngOnInit() {
  }

  login() {
    this.apiGatewayService.login(this.username, this.password).subscribe(
      data => {
        this.authService.storeBearerAuth(data.result);
        this.router.navigateByUrl("");
      });
  }
}
