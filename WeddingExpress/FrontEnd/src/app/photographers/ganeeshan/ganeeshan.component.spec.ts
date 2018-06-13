import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaneeshanComponent } from './ganeeshan.component';

describe('GaneeshanComponent', () => {
  let component: GaneeshanComponent;
  let fixture: ComponentFixture<GaneeshanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaneeshanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaneeshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
