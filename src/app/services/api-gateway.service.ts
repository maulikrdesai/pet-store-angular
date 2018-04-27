import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http';
import { ApiResponse } from '../models/api.models';
import { Observable } from 'rxjs/Observable';
import { Pet, Category } from '../models/pet.store.models';

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": "Basic b3duZXJAZXNwcmlkYS5jb206T3duZXIxMjM="
  })
};
const urlEncodingCodec: HttpUrlEncodingCodec = new HttpUrlEncodingCodec();

@Injectable()
export class ApiGatewayService {

  urlBase: string = "http://mdesai.tps.main:8080";

  constructor(private http: HttpClient) {
  }

  /**
   * GET /pets?categoryId=<categoryId>
   * @param category 
   */
  getPets(category?: Category): Observable<ApiResponse<Pet[]>> {
    if (category != null && category.id > 0)
      return this.doApiGET(this.urlBase + "/pets?categoryId=" + category.id);
    return this.doApiGET(this.urlBase + "/pets");
  }

  private doApiGET(url): Observable<ApiResponse<any>> {
    return <Observable<ApiResponse<any>>>this.http.get(url, httpOptions);
  }

}
