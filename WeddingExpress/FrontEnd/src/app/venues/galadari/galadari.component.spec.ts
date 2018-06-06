import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaladariComponent } from './galadari.component';

describe('GaladariComponent', () => {
  let component: GaladariComponent;
  let fixture: ComponentFixture<GaladariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaladariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaladariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
