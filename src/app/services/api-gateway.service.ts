import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http';
import { ApiResponse, UserCredential, UserPrincipal } from '../models/api.models';
import { Observable } from 'rxjs/Observable';
import { Pet, Category } from '../models/pet.store.models';
import { environment } from '../../environments/environment';

/**
 * Api Gateway Service offers functions to trigger REST api calls.
 */
@Injectable()
export class ApiGatewayService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<ApiResponse<UserPrincipal>> {
    let userCred: UserCredential = { username: username, password: password };
    return this.doApiPOST("/login", userCred);
  }

  logout(): Observable<ApiResponse<void>> {
    return <Observable<ApiResponse<void>>>this.http.get(environment.urlBase + "/logout");
  }

  doApiDELETE(path): Observable<ApiResponse<any>> {
    return <Observable<ApiResponse<any>>>this.http.delete(environment.urlBase + path);
  }

  doApiGET(path): Observable<ApiResponse<any>> {
    return <Observable<ApiResponse<any>>>this.http.get(environment.urlBase + path);
  }

  doApiPUT(path, body: any): Observable<ApiResponse<any>> {
    return <Observable<ApiResponse<any>>>this.http.put(environment.urlBase + path, body);
  }

  doApiPOST(path, body: any): Observable<ApiResponse<any>> {
    return <Observable<ApiResponse<any>>>this.http.post(environment.urlBase + path, body);
  }

}
