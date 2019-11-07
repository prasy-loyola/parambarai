import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Relation } from './relation';
import { environment } from 'src/environments/environment';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class RelationshipService {


  
  private relationsEndpoint = environment.serviceEndpoint + "relationships";

  private relationBetweenTwoEndpoint = environment.serviceEndpoint + "relationshipWithDetailses/search/relationshipBetweenTwo";
  private linkBetweenTwoEndpoint = environment.serviceEndpoint + "shortestLink";

  constructor(private http : HttpClient) { }


  addRelationship(relation: Relation){
    return this.http.post(this.relationsEndpoint,relation);
  }

  getRelationship(person1: string, person2: string) {
    return this.http.get(this.relationBetweenTwoEndpoint,{"params":{"person1Id":person1,"person2Id":person2 }})
  }
  findLink(person1: string, person2: string) {
    return this.http.get<Person[]>(this.linkBetweenTwoEndpoint,{"params":{"person1":person1,"person2":person2 }})
  }
}
