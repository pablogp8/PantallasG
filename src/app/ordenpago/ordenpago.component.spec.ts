import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenpagoComponent } from './ordenpago.component';

describe('OrdenpagoComponent', () => {
  let component: OrdenpagoComponent;
  let fixture: ComponentFixture<OrdenpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
