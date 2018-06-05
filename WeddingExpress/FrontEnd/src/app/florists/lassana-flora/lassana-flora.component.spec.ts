import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LassanaFloraComponent } from './lassana-flora.component';

describe('LassanaFloraComponent', () => {
  let component: LassanaFloraComponent;
  let fixture: ComponentFixture<LassanaFloraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LassanaFloraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LassanaFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
