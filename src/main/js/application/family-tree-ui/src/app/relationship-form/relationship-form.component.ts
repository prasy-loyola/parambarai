import { Component, OnInit } from '@angular/core';
import { Relation } from '../relation';
import { RelationshipService } from '../relationship-service.service';

@Component({
  selector: 'app-relationship-form',
  templateUrl: './relationship-form.component.html',
  styleUrls: ['./relationship-form.component.less']
})
export class RelationshipFormComponent implements OnInit {

  relationship : Relation;
  constructor(private relationshipService : RelationshipService) { }

  ngOnInit() {
    this.relationship= new Relation();
  }


  addRelationship(){
    this.relationshipService.addRelationship(this.relationship).subscribe(s=> console.log(s));
  }
}
