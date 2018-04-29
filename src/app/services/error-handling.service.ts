import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from './alert.service';
import { ApiResponse } from '../models/api.models';

@Injectable()
export class ErrorHandlingService extends ErrorHandler {

  constructor(private alertService: AlertService) {
    super();
  }

  handleError(error: any): void {
    super.handleError(error);
    if (error instanceof HttpErrorResponse) {
      let errRes: HttpErrorResponse = (<HttpErrorResponse>error);
      this.alertService.error("errRes.error.message");
    }
  }
}