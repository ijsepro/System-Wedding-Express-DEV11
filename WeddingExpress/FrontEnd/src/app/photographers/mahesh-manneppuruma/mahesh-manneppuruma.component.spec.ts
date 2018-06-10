import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaheshManneppurumaComponent } from './mahesh-manneppuruma.component';

describe('MaheshManneppurumaComponent', () => {
  let component: MaheshManneppurumaComponent;
  let fixture: ComponentFixture<MaheshManneppurumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaheshManneppurumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaheshManneppurumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
