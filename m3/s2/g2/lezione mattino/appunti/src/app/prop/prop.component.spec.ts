import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropComponent } from './prop.component';

describe('PropComponent', () => {
  let component: PropComponent;
  let fixture: ComponentFixture<PropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropComponent]
    });
    fixture = TestBed.createComponent(PropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
