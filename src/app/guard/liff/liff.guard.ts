import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LiffService } from 'src/app/service/liff/liff.service';

@Injectable({
  providedIn: 'root'
})
export class LiffGuard  {
  constructor(
    private liffService: LiffService,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      resolve(this.liffService.LIFFinit());
    });
  }
}
