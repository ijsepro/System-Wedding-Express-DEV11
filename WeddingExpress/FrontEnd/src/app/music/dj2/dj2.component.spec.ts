import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dj2Component } from './dj2.component';

describe('Dj2Component', () => {
  let component: Dj2Component;
  let fixture: ComponentFixture<Dj2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dj2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
