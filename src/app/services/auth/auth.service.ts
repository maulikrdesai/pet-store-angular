import { Injectable } from '@angular/core';
import { ApiGatewayService } from '../api-gateway.service';
import { Observable } from 'rxjs/Observable';
import { Pet } from '../../models/pet.store.models';
import { Subject } from 'rxjs';
import { UserPrincipal } from '../../models/api.models';

@Injectable()
export class AuthService {

  private static AUTH_KEY: string = "userPrincipal";
  public authRequired: Subject<String> = new Subject<String>();

  constructor() {
  }

  /***
   * Stringify, Encrypt and Store userPrincipal as Bearer Token
   */
  storeBearerAuth(userPrincipal: UserPrincipal): void {
    console.info("Persisting Bearer Authentication to Local-Storage", userPrincipal);
    localStorage.setItem(AuthService.AUTH_KEY, JSON.stringify(userPrincipal));
  }

  /**
   * Check weather UserPrincipal has provided Role
   * @param role
   */
  hasRole(role: string): boolean {
    if (!role)
      return false;

    let userPrincipal: UserPrincipal = this.getUserPrincipal();
    if (!userPrincipal)
      return false;
    return userPrincipal.roles.filter(v => v.toLowerCase() == role.toLowerCase()).length > 0;
  }

  /**
   * Parse UserPrincipal from lastly serialized UserPrincipal
   */
  getUserPrincipal(): UserPrincipal {
    if (localStorage.getItem(AuthService.AUTH_KEY))
      return JSON.parse(localStorage.getItem(AuthService.AUTH_KEY));
    return null;
  }

  /***
   * Retrieve ready to use  Bearer token
   */
  getBearerAuth(): string {
    if (localStorage.getItem(AuthService.AUTH_KEY))
      return "Bearer " + btoa(localStorage.getItem(AuthService.AUTH_KEY));
    console.warn("Authentication is not provided yet to store");
    return null;
  }

  /***
   * Remove  Bearer token from the Storage
   */
  removeBearerAuth(): void {
    localStorage.removeItem(AuthService.AUTH_KEY);
    console.info("Removing Bearer Authentication to Local-Storage");
  }
}