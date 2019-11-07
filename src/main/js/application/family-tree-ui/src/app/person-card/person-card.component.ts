import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { PersonViewerComponent } from '../person-viewer/person-viewer.component';
import { DataService } from '../data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.less']
})
export class PersonCardComponent implements OnInit {
  @Input()
  person: Person;
  closeResult: string;
  showOption: boolean;
  @Input()
  viewerComponent: PersonViewerComponent;
  constructor(private modalService: NgbModal) {

    // this.person = person;PersonViewerComponent
   }

  ngOnInit() {
  }

  showRelations(){
    this.viewerComponent.showRelations(this.person);
  }
  edit(){
      
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
