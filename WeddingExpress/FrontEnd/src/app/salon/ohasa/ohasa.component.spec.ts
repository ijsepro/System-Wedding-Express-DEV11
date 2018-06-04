import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhasaComponent } from './ohasa.component';

describe('OhasaComponent', () => {
  let component: OhasaComponent;
  let fixture: ComponentFixture<OhasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
