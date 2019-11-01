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
  sameLevelPersons: Person[];
  parentPersons: Person[];
  childPersons: Person[];

  ngOnInit() {
    this.loadAllPersons();
    this.sameLevelPersons = [];
    this.parentPersons = [];
    this.childPersons = [];
  }

  loadAllPersons(): void {
    this.personService
      .getAllPersons()
      .subscribe(persons1 => {

        persons1._embedded.persons.forEach(
          (p) => {
            this.sameLevelPersons.push(p);
          }
        );
      }
      );
  }


  showRelations(person: Person) {
    var persons: Person[] = [];
    this.sameLevelPersons = [];
    this.parentPersons = [];
    this.childPersons = [];

    person.relationship = null;
    person.order=null;
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
              var relationshipResult = this.getInverseRelationship(s.relationship, s.p2_gender);
              otherPerson.relationship = relationshipResult.showName;
              otherPerson.order = relationshipResult["order"];
            } else {
              otherPerson.gender = s.p1_gender;
              otherPerson.id = s.p1_id;
              otherPerson.name = s.p1_name;
              otherPerson.stories = s.p1_stories;
              var relationshipResult = this.getGenderBasedName((s.relationship || ""), s.p1_gender);
              otherPerson.relationship = relationshipResult.showName;
              otherPerson.order = relationshipResult["order"];

            }

            persons.push(otherPerson);

          }
        );

        persons.forEach((p) => {
          switch (p.order) {
            case 1:
              this.parentPersons.push(p);
              break;
            case -1:
              this.childPersons.push(p);
              break;

            default:
              this.sameLevelPersons.push(p);
              break;
          }
        })

      });

  }


  getGenderBasedName(relationship: string, gender: string) {

    var genderName = {
      "MALE": {
        "PARENT": "FATHER",
        "CHILD": "SON",
        "SPOUSE": "HUSBAND"
      },
      "FEMALE": {
        "PARENT": "MOTHER",
        "CHILD": "DAUGHTER",
        "SPOUSE": "WIFE"
      }
    }



    var result = { "showName": genderName[gender.toUpperCase()][relationship.toUpperCase()] };

    switch (relationship.toUpperCase()) {
      case "CHILD":
        result["order"] = -1;
        break;
      case "PARENT":
        result["order"] = 1;
        break;

      default:
        result["order"] = 0;
        break;

    }

    return result;

  }

  getInverseRelationship(relationship: string, gender: string) {


    switch (relationship.toUpperCase()) {
      case "CHILD":
        return this.getGenderBasedName("PARENT", gender);
      case "PARENT":
        return this.getGenderBasedName("CHILD", gender);
      case "SPOUSE":
        return this.getGenderBasedName("SPOUSE", gender);
    }
  }

}
