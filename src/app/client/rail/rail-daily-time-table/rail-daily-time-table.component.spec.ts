import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RailDailyTimeTableComponent } from './rail-daily-time-table.component';

describe('RailDailyTimeTableComponent', () => {
  let component: RailDailyTimeTableComponent;
  let fixture: ComponentFixture<RailDailyTimeTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RailDailyTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailDailyTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
