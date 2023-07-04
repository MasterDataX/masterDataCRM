import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMenuComponent } from './first-menu.component';

describe('FirstMenuComponent', () => {
  let component: FirstMenuComponent;
  let fixture: ComponentFixture<FirstMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstMenuComponent]
    });
    fixture = TestBed.createComponent(FirstMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
