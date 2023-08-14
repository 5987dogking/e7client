import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RailTrainTimeTableDialogComponent } from './rail-train-time-table-dialog.component';

describe('RailTrainTimeTableDialogComponent', () => {
  let component: RailTrainTimeTableDialogComponent;
  let fixture: ComponentFixture<RailTrainTimeTableDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RailTrainTimeTableDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailTrainTimeTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
