import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingFeedsComponent } from './wedding-feeds.component';

describe('WeddingFeedsComponent', () => {
  let component: WeddingFeedsComponent;
  let fixture: ComponentFixture<WeddingFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
