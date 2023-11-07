import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Real1Component } from './real1.component';

describe('Real1Component', () => {
  let component: Real1Component;
  let fixture: ComponentFixture<Real1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Real1Component]
    });
    fixture = TestBed.createComponent(Real1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
