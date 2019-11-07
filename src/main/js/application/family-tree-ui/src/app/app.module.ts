import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonViewerComponent } from './person-viewer/person-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PersonFormComponent } from './person-form/person-form.component'; 
import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';
import { RelationshipFormComponent } from './relationship-form/relationship-form.component';
import { FindRelationshipComponent } from './find-relationship/find-relationship.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PersonViewerComponent,
    PersonFormComponent,
    RelationshipFormComponent,
    FindRelationshipComponent,
    PersonCardComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
