import { Injectable, ErrorHandler } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ErrorHandlingService extends ErrorHandler {

  constructor() {
    super();
   }

   handleError(error: any): void{
    super.handleError(error);
    if(error instanceof HttpErrorResponse){
      let errRes:HttpErrorResponse = (<HttpErrorResponse>error);
    }
   }
}