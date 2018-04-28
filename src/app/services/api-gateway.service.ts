import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http';
import { ApiResponse } from '../models/api.models';
import { Observable } from 'rxjs/Observable';
import { Pet, Category } from '../models/pet.store.models';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": "Basic b3duZXJAZXNwcmlkYS5jb206T3duZXIxMjM="
  })
};
const urlEncodingCodec: HttpUrlEncodingCodec = new HttpUrlEncodingCodec();

@Injectable()
export class ApiGatewayService {

  constructor(private http: HttpClient) {
  }

  /**
   * GET /pets?categoryId=<categoryId>
   * @param category 
   */
  getPets(category?: Category): Observable<ApiResponse<Pet[]>> {
    if (category != null && category.id > 0)
      return this.doApiGET("/pets?categoryId=" + category.id);
    return this.doApiGET("/pets");
  }


  getPet(petId:number): Observable<ApiResponse<Pet>> {
    return this.doApiGET("/pets/" + petId);
  }

  private doApiGET(path): Observable<ApiResponse<any>> {
    return <Observable<ApiResponse<any>>>this.http.get(environment.urlBase + path, httpOptions);
  }

}
