import { Component, OnInit, Input } from '@angular/core';
import { Relation } from '../relation';
import { RelationshipService } from '../relationship-service.service';
import { Person } from '../person';

@Component({
  selector: 'app-relationship-form',
  templateUrl: './relationship-form.component.html',
  styleUrls: ['./relationship-form.component.less']
})
export class RelationshipFormComponent implements OnInit {

  
  relationship : Relation;
  @Input()
  person1: number;
  constructor(private relationshipService : RelationshipService) { }


  

  ngOnInit() {
    this.relationship= new Relation();
    this.relationship.person1=this.person1;
    this.relationship.relationship = "PARENT";
  }


  addRelationship(){
    this.relationshipService.addRelationship(this.relationship).subscribe(s=> console.log(s));
    this.ngOnInit();
  }

}
