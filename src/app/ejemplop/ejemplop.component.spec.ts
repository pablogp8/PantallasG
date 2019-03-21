import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplopComponent } from './ejemplop.component';

describe('EjemplopComponent', () => {
  let component: EjemplopComponent;
  let fixture: ComponentFixture<EjemplopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemplopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
