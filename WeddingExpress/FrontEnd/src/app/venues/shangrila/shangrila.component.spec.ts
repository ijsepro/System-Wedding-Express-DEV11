import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShangrilaComponent } from './shangrila.component';

describe('ShangrilaComponent', () => {
  let component: ShangrilaComponent;
  let fixture: ComponentFixture<ShangrilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShangrilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShangrilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
