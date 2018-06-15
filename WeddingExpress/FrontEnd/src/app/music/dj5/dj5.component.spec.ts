import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dj5Component } from './dj5.component';

describe('Dj5Component', () => {
  let component: Dj5Component;
  let fixture: ComponentFixture<Dj5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dj5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dj5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
