import { Component, OnInit } from '@angular/core';
import { MotcService } from 'src/app/service/motc/motc.service';
import { ActivatedRoute } from '@angular/router';
import { BusN1EstimateTime } from 'src/app/interface/bus';

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {
  StopStatus = ['正常', '尚未發車', '交管不停靠', '末班車已過', '今日未營運'];
  constructor(
    public motcService: MotcService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (v) => {
        if (v.City !== undefined && v.RouteName !== undefined) {
          this.motcService.BusEstimatedTimeOfArrivalCity(v.City, v.RouteName);
        } else {
          this.motcService.BusEstimatedTimeOfArrivalCity('Kaohsiung', '8041C');
        }
      },
    );
    setTimeout(() => {
      this.ngOnInit();
    }, 100000);
  }

  justIn(busN1EstimateTime: BusN1EstimateTime, busN1EstimateTimes: BusN1EstimateTime[]) {
    if (!busN1EstimateTime.Estimates) { return false; }
    let time = 0
    for (const b of busN1EstimateTimes) {
      if (time) { continue; }
      if (b.Estimates) { time = b.Estimates[0].EstimateTime }
    }
    if (busN1EstimateTime.Estimates[0].EstimateTime === time) {
      return true;
    }
    return false;
  }

  scroll() {
    const target = document.getElementsByClassName('grey');
    const el = target[target.length - 2];
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
