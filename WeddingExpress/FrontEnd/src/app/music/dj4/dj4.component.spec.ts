import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dj4Component } from './dj4.component';

describe('Dj4Component', () => {
  let component: Dj4Component;
  let fixture: ComponentFixture<Dj4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dj4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dj4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
