import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehanComponent } from './rehan.component';

describe('RehanComponent', () => {
  let component: RehanComponent;
  let fixture: ComponentFixture<RehanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
