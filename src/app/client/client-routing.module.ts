import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RailStationComponent } from './rail/rail-station/rail-station.component';
import { BusRouteComponent } from './bus/bus-route/bus-route.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { TestComponent } from './games/test/test.component';
import { PetsComponent } from './games/pets/pets.component';
import { RailDailyTimeTableComponent } from './rail/rail-daily-time-table/rail-daily-time-table.component';
import { NotificationsComponent } from './games/notifications/notifications.component';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'rail/railStation' },
      { path: 'rail/railStation', component: RailStationComponent },
      { path: 'rail/railDailyTimeTable', component: RailDailyTimeTableComponent },
      { path: 'bus/busRoute', component: BusRouteComponent },
      {
        path: 'games', children: [
          { path: 'test', component: TestComponent },
          { path: 'pets', component: PetsComponent },
          { path: 'FCM', component: NotificationsComponent },
        ]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
