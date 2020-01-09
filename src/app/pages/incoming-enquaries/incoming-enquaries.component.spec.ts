import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingEnquariesComponent } from './incoming-enquaries.component';

describe('IncomingEnquariesComponent', () => {
  let component: IncomingEnquariesComponent;
  let fixture: ComponentFixture<IncomingEnquariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingEnquariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingEnquariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
