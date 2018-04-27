import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { ErrorHandlingService } from './services/error-handling.service';
import { ApiGatewayService } from './services/api-gateway.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:ErrorHandler, useClass:ErrorHandlingService}
    ,ApiGatewayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
