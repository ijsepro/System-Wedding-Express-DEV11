import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingFloraComponent } from './wedding-flora.component';

describe('WeddingFloraComponent', () => {
  let component: WeddingFloraComponent;
  let fixture: ComponentFixture<WeddingFloraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingFloraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
