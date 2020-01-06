import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSmithComponent } from './black-smith.component';

describe('BlackSmithComponent', () => {
  let component: BlackSmithComponent;
  let fixture: ComponentFixture<BlackSmithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackSmithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackSmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
