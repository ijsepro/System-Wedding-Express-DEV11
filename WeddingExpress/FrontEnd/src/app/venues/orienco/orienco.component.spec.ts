import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriencoComponent } from './orienco.component';

describe('OriencoComponent', () => {
  let component: OriencoComponent;
  let fixture: ComponentFixture<OriencoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriencoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
