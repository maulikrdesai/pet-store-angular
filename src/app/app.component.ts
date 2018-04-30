import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { PetService } from './services/pet.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pet Smart';

  constructor(private petServic: PetService
    , private authService: AuthService
    , private router: Router) {

  }

  public ngOnInit() {
    this.authService.authRequired.subscribe(
      authType => {
        console.log("Logged in session is lost " + authType);
        this.router.navigateByUrl("login");
      });
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl("login");
  }
}
