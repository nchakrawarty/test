import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingEnquariesComponent } from './outgoing-enquaries.component';

describe('OutgoingEnquariesComponent', () => {
  let component: OutgoingEnquariesComponent;
  let fixture: ComponentFixture<OutgoingEnquariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgoingEnquariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingEnquariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
