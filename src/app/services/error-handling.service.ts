import { Injectable, ErrorHandler, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../models/api.models';
import { AuthService } from './auth/auth.service';

@Injectable()
export class ErrorHandlingService extends ErrorHandler {

  constructor(private authService: AuthService) {
    super();
  }

  handleError(error: any): void {
    super.handleError(error);
    if (error instanceof HttpErrorResponse) {
      let errRes: HttpErrorResponse = (<HttpErrorResponse>error);
      if(errRes.status == 400)
      this.authService.authRequired.next(true);
    }
  }
}