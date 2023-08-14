import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserLineNotifyComponent } from './user-line-notify.component';

describe('UserLineNotifyComponent', () => {
  let component: UserLineNotifyComponent;
  let fixture: ComponentFixture<UserLineNotifyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLineNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLineNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
