import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmariComponent } from './amari.component';

describe('AmariComponent', () => {
  let component: AmariComponent;
  let fixture: ComponentFixture<AmariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
