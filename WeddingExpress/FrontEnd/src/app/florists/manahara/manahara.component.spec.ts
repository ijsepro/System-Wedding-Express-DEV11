import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaharaComponent } from './manahara.component';

describe('ManaharaComponent', () => {
  let component: ManaharaComponent;
  let fixture: ComponentFixture<ManaharaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaharaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaharaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
