import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { PetService } from './services/pet.service';
import { ErrorHandlingService } from './services/error-handling.service';
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
      doLogin => { 
        this.router.navigateByUrl("login");
        console.log("Logged in session is lost " + doLogin);
        if (doLogin)
          this.router.navigateByUrl("login");
      })
    this.petServic.deletePet(123)
      .subscribe(
        data => console.log(data)
      );
  }
}
