import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LiffService } from 'src/app/service/liff/liff.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard  {
  constructor(
    private router: Router,
    private liffService: LiffService,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const nowUrl = state.url.split('?')[0];
    if (next.queryParams.liffId !== undefined) {
      this.liffService.liffId = next.queryParams.liffId;
    }
    if (next.queryParams.channelID !== undefined) {
      this.liffService.channelID = next.queryParams.channelID;
    }
    // Notify回來使後用的
    if (next.queryParams.state !== undefined && next.queryParams.liffRedirectUri === undefined) {
      const code = next.queryParams.code;
      window.location.href = location.origin + '?' + next.queryParams.state.split(',').join('&') + '&code=' + code;
      return true;
    }
    this.liffService.locationHref = location.origin + '/?' + state.url.split('?')[1];
    if (next.queryParams.page !== undefined && next.queryParams.page.includes('user') === true) {
      return new Promise((resolve, reject) => {
        this.liffService.LIFFinit().then(
          () => {
            if (nowUrl === '/' && next.queryParams.page !== undefined) {
              this.router.navigate([next.queryParams.page], { queryParams: { ...next.queryParams } });
            }
            if (nowUrl === '/' && next.queryParams.page === undefined) {
              this.router.navigateByUrl('/client/rail/railDailyTimeTable');
            }
            resolve(true);
          }
        );
      });
    } else {
      if (nowUrl === '/' && next.queryParams.page !== undefined) {
        this.router.navigate([next.queryParams.page], { queryParams: { ...next.queryParams } });
      }
      if (nowUrl === '/' && next.queryParams.page === undefined) {
        this.router.navigateByUrl('/client/rail/railDailyTimeTable');
      }
      return true;
    }
  }
}
