import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EweuniComponent } from './eweuni.component';

describe('EweuniComponent', () => {
  let component: EweuniComponent;
  let fixture: ComponentFixture<EweuniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EweuniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EweuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
