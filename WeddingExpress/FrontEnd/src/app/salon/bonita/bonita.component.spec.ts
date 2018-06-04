import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonitaComponent } from './bonita.component';

describe('BonitaComponent', () => {
  let component: BonitaComponent;
  let fixture: ComponentFixture<BonitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
