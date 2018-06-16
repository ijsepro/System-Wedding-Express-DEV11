import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalasuriyaComponent } from './balasuriya.component';

describe('BalasuriyaComponent', () => {
  let component: BalasuriyaComponent;
  let fixture: ComponentFixture<BalasuriyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalasuriyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalasuriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
