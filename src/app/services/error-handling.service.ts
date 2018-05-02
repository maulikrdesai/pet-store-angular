import { Injectable, ErrorHandler, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../models/api.models';
import { AuthService } from './auth/auth.service';
import { AlertService } from './alert.service';

@Injectable()
export class ErrorHandlingService extends ErrorHandler {

  constructor(private authService: AuthService
    , private alertService: AlertService) {

    super();
  }

  handleError(error: any): void {
    super.handleError(error);
    if (error instanceof HttpErrorResponse) {
      let errRes: HttpErrorResponse = (<HttpErrorResponse>error);
      console.error(errRes.error.message);
      this.alertService.error(errRes.error.message);
      if (errRes.status == 401)
        if(errRes.headers.get("WWW-Authenticate"))
          this.authService.authRequired.next(errRes.headers.get("WWW-Authenticate"));
    }
  }
}