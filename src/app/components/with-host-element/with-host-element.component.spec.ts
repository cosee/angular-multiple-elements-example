import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithHostElementComponent } from './with-host-element.component';

describe('WithHostElementComponent', () => {
  let component: WithHostElementComponent;
  let fixture: ComponentFixture<WithHostElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithHostElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithHostElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
