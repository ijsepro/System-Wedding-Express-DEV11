import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvenraComponent } from './avenra.component';

describe('AvenraComponent', () => {
  let component: AvenraComponent;
  let fixture: ComponentFixture<AvenraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvenraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvenraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
