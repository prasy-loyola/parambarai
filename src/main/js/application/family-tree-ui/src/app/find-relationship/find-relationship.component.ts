import { Component, OnInit } from '@angular/core';
import { RelationshipService } from '../relationship-service.service';
import { Person } from '../person';

@Component({
  selector: 'app-find-relationship',
  templateUrl: './find-relationship.component.html',
  styleUrls: ['./find-relationship.component.less']
})
export class FindRelationshipComponent implements OnInit {

  person1:string;
  person2:string;
  linkPersons: Person[];
  constructor(private relationshipService : RelationshipService) { }

  ngOnInit() {
  }

  findRelationship(){
    this.relationshipService.findLink(this.person1,this.person2).subscribe((r)=> this.linkPersons=r);
  }
}
