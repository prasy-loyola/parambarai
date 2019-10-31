import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person-service.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-viewer',
  templateUrl: './person-viewer.component.html',
  styleUrls: ['./person-viewer.component.less']
})
export class PersonViewerComponent implements OnInit {

  constructor(private personService: PersonService) { }

  persons: Person[];

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


  showRelations(person: Person) {
    var persons: Person[] = [];
    person.relationship=null;
    persons.push(person);
    
    this.personService.getRelations(person)
      .subscribe(relationshipDetailses => {

        relationshipDetailses._embedded.relationshipWithDetailses.forEach(
          (s) => {
            var otherPerson: Person = new Person();
            if (person.id === s.p1_id) {

              otherPerson.gender = s.p2_gender;
              otherPerson.id = s.p2_id;
              otherPerson.name = s.p2_name;
              otherPerson.stories = s.p2_stories;
              otherPerson.relationship= this.getInverseRelationship(s.relationship);
            } else {
              otherPerson.gender = s.p1_gender;
              otherPerson.id = s.p1_id;
              otherPerson.name = s.p1_name;
              otherPerson.stories = s.p1_stories;
              otherPerson.relationship = (s.relationship || "" ).toUpperCase();
            }

            persons.push(otherPerson);

          }
        );
        this.persons = persons;
      });

  }


  getInverseRelationship(relationship: String) {
    switch (relationship.toUpperCase()) {
      case "CHILD":
        return "PARENT";
      case "PARENT":
        return "CHILD";
      case "SPOUSE":
        return "SPOUSE";
    }
  }

}
