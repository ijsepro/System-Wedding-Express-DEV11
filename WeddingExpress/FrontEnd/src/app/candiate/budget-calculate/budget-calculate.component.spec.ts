import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCalculateComponent } from './budget-calculate.component';

describe('BudgetCalculateComponent', () => {
  let component: BudgetCalculateComponent;
  let fixture: ComponentFixture<BudgetCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
