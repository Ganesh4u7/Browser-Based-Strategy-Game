import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaracsComponent } from './baracs.component';

describe('BaracsComponent', () => {
  let component: BaracsComponent;
  let fixture: ComponentFixture<BaracsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaracsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaracsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
