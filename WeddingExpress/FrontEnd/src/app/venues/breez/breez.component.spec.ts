import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreezComponent } from './breez.component';

describe('BreezComponent', () => {
  let component: BreezComponent;
  let fixture: ComponentFixture<BreezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
