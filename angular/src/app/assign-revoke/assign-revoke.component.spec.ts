import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRevokeComponent } from './assign-revoke.component';

describe('AssignRevokeComponent', () => {
  let component: AssignRevokeComponent;
  let fixture: ComponentFixture<AssignRevokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignRevokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRevokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
