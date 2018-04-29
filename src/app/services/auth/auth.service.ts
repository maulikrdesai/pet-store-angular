import { Injectable } from '@angular/core';
import { ApiGatewayService } from '../api-gateway.service';
import { Observable } from 'rxjs/Observable';
import { Pet } from '../../models/pet.store.models';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  public authRequired:Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  login(username: string, password: string): void {
    localStorage.setItem("auth", "Basic " + btoa(username + ":" + password));
  }

  gotoLogin(){

  }

  getBasicAuth(): string {
    return localStorage.getItem("auth");
  }

  logout(): void {
    localStorage.removeItem("auth");
  }
}