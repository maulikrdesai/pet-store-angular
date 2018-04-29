import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { APP_ROUTING } from './app.routing';

import { PetService } from './services/pet.service';
import { AlertService } from './services/alert.service';
import { ApiGatewayService } from './services/api-gateway.service';
import { ErrorHandlingService } from './services/error-handling.service';

import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetInfoComponent } from './components/pet-info/pet-info.component';
import { PetEditorComponent } from './components/pet-editor/pet-editor.component';
import { AboutPetStoreComponent } from './components/about-pet-store/about-pet-store.component';

@NgModule({
  declarations: [
    AppComponent
    , PetListComponent
    , PetInfoComponent
    , AboutPetStoreComponent
    , PetEditorComponent
    , AlertComponent
    , PetCardComponent
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
    , PetService
    , AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
