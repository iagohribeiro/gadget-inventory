import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetComponent } from './gadget.component';

describe('GadgetComponent', () => {
  let component: GadgetComponent;
  let fixture: ComponentFixture<GadgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GadgetComponent]
    });
    fixture = TestBed.createComponent(GadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
