import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { PersonViewerComponent } from '../person-viewer/person-viewer.component';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.less']
})
export class PersonCardComponent implements OnInit {
  @Input()
  person: Person;

  @Input()
  viewerComponent: PersonViewerComponent;
  constructor() {

    // this.person = person;PersonViewerComponent
   }

  ngOnInit() {
  }

  showRelations(){
    this.viewerComponent.showRelations(this.person);
  }

}
