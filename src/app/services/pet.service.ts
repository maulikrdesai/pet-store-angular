import { Injectable } from '@angular/core';
import { ApiGatewayService } from './api-gateway.service';
import { Category, Pet } from '../models/pet.store.models';
import { Observable } from 'rxjs/Observable';
import { ApiResponse } from '../models/api.models';

@Injectable()
export class PetService {

  constructor(private apiGateway: ApiGatewayService) { }

  getPets(category?: Category): Observable<ApiResponse<Pet[]>> {
    if (category != null && category.id > 0)
      return this.apiGateway.doApiGET("/pets?categoryId=" + category.id);
    return this.apiGateway.doApiGET("/pets");
  }

  getPet(petId: number): Observable<ApiResponse<Pet>> {
    return this.apiGateway.doApiGET("/pets/" + petId);
  }

  addPet(pet: Pet): Observable<ApiResponse<Pet>> {
    return this.apiGateway.doApiPOST("/pets/", pet);
  }

  updatePet(pet: Pet): Observable<ApiResponse<Pet>> {
    return this.apiGateway.doApiPUT("/pets/" + pet.id, pet);
  }

  deletePet(petId: number): Observable<ApiResponse<void>> {
    return this.apiGateway.doApiDELETE("/pets/" + petId);
  }

}
