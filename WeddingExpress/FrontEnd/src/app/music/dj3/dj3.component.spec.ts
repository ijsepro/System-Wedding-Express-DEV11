import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dj3Component } from './dj3.component';

describe('Dj3Component', () => {
  let component: Dj3Component;
  let fixture: ComponentFixture<Dj3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dj3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dj3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
