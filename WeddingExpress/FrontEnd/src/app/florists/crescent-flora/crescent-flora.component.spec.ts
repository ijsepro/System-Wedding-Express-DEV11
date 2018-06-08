import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrescentFloraComponent } from './crescent-flora.component';

describe('CrescentFloraComponent', () => {
  let component: CrescentFloraComponent;
  let fixture: ComponentFixture<CrescentFloraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrescentFloraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrescentFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
