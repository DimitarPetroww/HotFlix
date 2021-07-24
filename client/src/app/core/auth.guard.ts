import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userService: UserService, private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogged = route.data.isLogged

    return this.userService.currentUser$.pipe(
      switchMap(user => user === undefined ? this.userService.isAuth() : [user]),
      map(user => {
        if (typeof isLogged !== 'boolean' || !!user === isLogged) return true
        this.router.navigateByUrl(route.data.redirectUrl || "/")
      }),
      first()
    )
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLogged = childRoute.data.isLogged
    return this.userService.currentUser$.pipe(
      switchMap(user => user === undefined ? this.userService.isAuth() : [user]),
      map(user => {
        if (typeof isLogged !== 'boolean' || !!user === isLogged) return true
        this.router.navigateByUrl(childRoute.data.redirectUrl || "/")
      }),
      first()
    )
  }

}
