import { Injectable } from '@angular/core';
import { ApiGatewayService } from './api-gateway.service';
import { Category, Pet } from '../models/pet.store.models';
import { Observable } from 'rxjs/Observable';
import { ApiResponse } from '../models/api.models';

@Injectable()
export class PetService {

  constructor(private apiGateway: ApiGatewayService) { }

  getPets(): Observable<ApiResponse<Pet[]>> {
    return this.apiGateway.doApiGET("/pets");
  }

  addPet(pet: Pet): Observable<ApiResponse<Pet>> {
    return this.apiGateway.doApiPOST("/pets/", pet);
  }

  getPet(petId: number): Observable<ApiResponse<Pet>> {
    return this.apiGateway.doApiGET("/pets/" + petId);
  }

  updatePet(petId: number, pet: Pet): Observable<ApiResponse<Pet>> {
    return this.apiGateway.doApiPUT("/pets/" + petId, pet);
  }

  deletePet(petId: number): Observable<ApiResponse<void>> {
    return this.apiGateway.doApiDELETE("/pets/" + petId);
  }

}
