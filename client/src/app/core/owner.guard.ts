import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable()
export class OwnerGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogged = route.data.isLogged
    const url = state.url
    const id = url.slice(url.lastIndexOf("/") + 1)
    if (typeof isLogged == "boolean" && isLogged != this.userService.isLogged) {
      this.router.navigate(["/"])
      return false
    }
    const canActivate = this.userService.getUser().pipe(map(x => {
      const isOwner =  x.ownedMovies.some(x => x._id == id)
      if(!isOwner) this.router.navigate(["/"])
      return isOwner
    }))

    return canActivate
  }
}
