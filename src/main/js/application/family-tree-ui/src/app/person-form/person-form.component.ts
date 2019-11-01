import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../person';
import { PersonService } from '../person-service.service';
import { ButtonsModule} from 'ngx-bootstrap';    



@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.less']
})
export class PersonFormComponent implements OnInit {

  person: Person;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.person = new Person();
    this.person.gender= "Male";
  }

  addPerson(){
    console.log(JSON.stringify(this.person))
    this.personService.addPerson(this.person)
    .subscribe(response => console.log(response));
    ;
    this.ngOnInit();
  }

}
