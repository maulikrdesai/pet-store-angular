import { Injectable } from '@angular/core';
import { ApiGatewayService } from '../api-gateway.service';
import { Observable } from 'rxjs/Observable';
import { Pet } from '../../models/pet.store.models';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  public authRequired:Subject<String> = new Subject<String>();

  constructor() {
  }

  login(username: string, password: string): void {
    console.log("Storing credential into local storage for " + username)
    localStorage.setItem("auth", "Basic " + btoa(username + ":" + password));
  }

  getBasicAuth(): string {
    if(!localStorage.getItem("auth"))
      console.error("Authentication is not provided yet to store");
    return localStorage.getItem("auth");
  }

  logout(): void {
    localStorage.removeItem("auth");
    console.info("Authentication is removed from store");
  }
}