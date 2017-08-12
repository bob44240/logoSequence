import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawLogoComponent } from './draw-logo.component';

describe('DrawLogoComponent', () => {
  let component: DrawLogoComponent;
  let fixture: ComponentFixture<DrawLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
