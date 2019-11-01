import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person, Persons } from './person';
import { environment } from 'src/environments/environment';
import { RestResponse } from './rest-response';
import { RelationshipWithDetails, RelationshipWithDetailsResp } from './relationship-with-details';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private allPersonsEndPoint = environment.serviceEndpoint + "persons/";
  private relationsEndpoint = environment.serviceEndpoint + "relationshipWithDetailses/search/allrelations?personId=";

  constructor(private http: HttpClient) { }

  getAllPersons(): Observable<RestResponse<Persons>> {
    return this.http.get<RestResponse<Persons>>(this.allPersonsEndPoint);
  }
  addPerson(person: Person) {
    return this.http.post(this.allPersonsEndPoint, person);
  }

  getRelations(person: Person) {
    return this.http.get<RestResponse<RelationshipWithDetailsResp>>(this.relationsEndpoint + person.id);
  }

}
