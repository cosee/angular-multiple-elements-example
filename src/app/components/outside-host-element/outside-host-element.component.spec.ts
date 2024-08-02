import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideHostElementComponent } from './outside-host-element.component';

describe('OutsideHostElementComponent', () => {
  let component: OutsideHostElementComponent;
  let fixture: ComponentFixture<OutsideHostElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsideHostElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideHostElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
