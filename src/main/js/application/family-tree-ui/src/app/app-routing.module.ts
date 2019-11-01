import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonViewerComponent } from './person-viewer/person-viewer.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { RelationshipFormComponent } from './relationship-form/relationship-form.component';
import { FindRelationshipComponent } from './find-relationship/find-relationship.component';


const routes: Routes = [
  { path: "", component: PersonViewerComponent},
  { path: "home", component: PersonViewerComponent},
  { path: "add-person", component: PersonFormComponent},
  { path: "add-relationship", component: RelationshipFormComponent},
  { path: "find-relationship", component: FindRelationshipComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
