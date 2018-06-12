import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dj1Component } from './dj1.component';

describe('Dj1Component', () => {
  let component: Dj1Component;
  let fixture: ComponentFixture<Dj1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dj1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
