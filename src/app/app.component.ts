import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { PetService } from './services/pet.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { ApiGatewayService } from './services/api-gateway.service';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pet Smart';

  constructor(private apiGatewayService: ApiGatewayService
    , private authService: AuthService
    , private router: Router
    , private alertService: AlertService) {

  }

  public ngOnInit() {
    this.authService.authRequired.subscribe(
      authType => {
        this.alertService.info("Here is where you prove what you are");
        this.router.navigateByUrl("login");
      });
  }

  logout() {
    this.authService.removeBearerAuth();
    this.apiGatewayService.logout().subscribe(data => this.alertService.success(data.message));
    this.router.navigateByUrl("pets");
  }
}
