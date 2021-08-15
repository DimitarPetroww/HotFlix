import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable()
export class OwnerGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = state.url
    const id = url.slice(url.lastIndexOf("/") + 1)

    return this.userService.currentUser$.pipe(
      switchMap(user => user === undefined ? this.userService.isAuth() : [user]),
      map(user => {
        if (!user) {
          this.router.navigateByUrl("/user/login")
          return false
        }
        if (user.ownedMovies.every(movie => id != movie._id)) {
          this.router.navigateByUrl("/browse")
          return false
        }
        return true
      }),
      first()
    )
  }
}
