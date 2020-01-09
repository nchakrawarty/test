import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class NoauthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      //not logged in so return false
      this.router.navigate(['/dashboard']);
      return false;
    }

    // logged in so redirect to return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return true;
  }
}
