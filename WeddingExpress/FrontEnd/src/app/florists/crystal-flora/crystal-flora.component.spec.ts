import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalFloraComponent } from './crystal-flora.component';

describe('CrystalFloraComponent', () => {
  let component: CrystalFloraComponent;
  let fixture: ComponentFixture<CrystalFloraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrystalFloraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrystalFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
