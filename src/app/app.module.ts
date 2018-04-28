import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ErrorHandlingService } from './services/error-handling.service';
import { ApiGatewayService } from './services/api-gateway.service';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetInfoComponent } from './components/pet-info/pet-info.component';
import { APP_ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
    , PetListComponent
    , PetInfoComponent
  ],
  imports: [
    BrowserModule
    , HttpClientModule
    , FormsModule
    , NgbModule.forRoot()
    , APP_ROUTING
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlingService }
    , ApiGatewayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
