import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealAPIComponent } from './real-api.component';

describe('RealAPIComponent', () => {
  let component: RealAPIComponent;
  let fixture: ComponentFixture<RealAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealAPIComponent]
    });
    fixture = TestBed.createComponent(RealAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
