import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person-service.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-viewer',
  templateUrl: './person-viewer.component.html',
  styleUrls: ['./person-viewer.component.less']
})
export class PersonViewerComponent implements OnInit {

  constructor( private personService: PersonService) { }

  persons:Person[];

  ngOnInit() {
    this.loadAllPersons();
  }

  loadAllPersons(): void {
    this.personService
      .getAllPersons()
      .subscribe(persons1 => {
        
        
        this.persons = persons1._embedded.persons;
     
      }
        );
  }


}
