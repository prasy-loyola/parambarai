import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRelationshipComponent } from './find-relationship.component';

describe('FindRelationshipComponent', () => {
  let component: FindRelationshipComponent;
  let fixture: ComponentFixture<FindRelationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRelationshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
