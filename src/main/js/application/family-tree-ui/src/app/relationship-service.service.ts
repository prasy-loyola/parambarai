import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Relation } from './relation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelationshipService {

  
  private relationsEndpoint = environment.serviceEndpoint + "relationships";

  constructor(private http : HttpClient) { }


  addRelationship(relation: Relation){
    return this.http.post(this.relationsEndpoint,relation);
  }
}
