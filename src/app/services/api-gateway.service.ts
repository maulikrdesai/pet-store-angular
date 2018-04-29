import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http';
import { ApiResponse } from '../models/api.models';
import { Observable } from 'rxjs/Observable';
import { Pet, Category } from '../models/pet.store.models';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
  })
};
const urlEncodingCodec: HttpUrlEncodingCodec = new HttpUrlEncodingCodec();

@Injectable()
export class ApiGatewayService {

  constructor(private http: HttpClient) {
  }

  doApiDELETE(path): Observable<ApiResponse<any>> {
    return <Observable<ApiResponse<any>>>this.http.delete(environment.urlBase + path, httpOptions);
  }

  doApiGET(path): Observable<ApiResponse<any>> {
    return <Observable<ApiResponse<any>>>this.http.get(environment.urlBase + path, httpOptions);
  }

  doApiPUT(path, body: any) {
    return <Observable<ApiResponse<any>>>this.http.put(environment.urlBase + path, body, httpOptions);
  }

  doApiPOST(path, body: any) {
    return <Observable<ApiResponse<any>>>this.http.post(environment.urlBase + path, body, httpOptions);
  }

}
