import { Injectable } from '@angular/core';
import { ApiGatewayService } from './api-gateway.service';
import { Category, Pet } from '../models/pet.store.models';
import { Observable } from 'rxjs/Observable';
import { ApiResponse } from '../models/api.models';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable()
export class PetService {

  constructor(private apiGateway: ApiGatewayService
    , private authService: AuthService
    , private alertService: AlertService
    , private router: Router) { }

  getPets(): Observable<ApiResponse<Pet[]>> {
    return this.apiGateway.doApiGET("/pets");
  }

  addPet(pet: Pet): Observable<ApiResponse<Pet>> {
    return this.apiGateway.doApiPOST("/pets/", pet);
  }

  getPet(petId: number): Observable<ApiResponse<Pet>> {
    return this.apiGateway.doApiGET("/pets/" + petId);
  }

  purchase(petId: number, pet: Pet): Observable<ApiResponse<Pet>> {
    pet.status = "SOLD";
    return this.apiGateway.doApiPUT("/pets/" + petId, pet);
  }

  return(petId: number, pet: Pet): Observable<ApiResponse<Pet>> {
    pet.status = "AVAILABLE";
    return this.apiGateway.doApiPUT("/pets/" + petId, pet);
  }

  updatePet(petId: number, pet: Pet): Observable<ApiResponse<Pet>> {
    if (!this.authService.hasRole('admin')) {
      this.alertService.error("Only Administrators are allowed to Add/Edit the pet");
      this.router.navigateByUrl("login");
    }
    else
      return this.apiGateway.doApiPUT("/pets/" + petId, pet);
  }

  deletePet(petId: number): Observable<ApiResponse<void>> {
    if (!this.authService.hasRole('admin')) {
      this.alertService.error("Only Administrators are allowed to Add/Edit the pet");
      this.router.navigateByUrl("login");
    }
    else
      return this.apiGateway.doApiDELETE("/pets/" + petId);
  }


}
