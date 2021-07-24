import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IUser } from '../interfaces/user';

@Injectable()
export class UserService {
  private _currentUser: BehaviorSubject<IUser | null> = new BehaviorSubject(undefined)
  currentUser$ = this._currentUser.asObservable()
  isLogged$ = this.currentUser$.pipe(map(user => !!user))

  constructor(private http: HttpClient) { }

  register(body: Object): Observable<IUser> {
    return this.http.post<IUser>(`/api/user/register`, body, { withCredentials: true })
    .pipe(tap((u: IUser) => this._currentUser.next(u)))
  }
  login(body: Object): Observable<IUser> {
    return this.http.post<IUser>(`/api/user/login`, body, { withCredentials: true })
    .pipe(tap((u: IUser) => this._currentUser.next(u)))
  }
  logout(): Observable<any> {
    return this.http.post<any>(`/api/user/logout`, {}, { withCredentials: true })
    .pipe(tap(() => this._currentUser.next(null)))
  }
  getUser(): Observable<IUser> {
    return this.http.get<IUser>("/api/user/profile", { withCredentials: true })
  }
  editUser(data: Object): Observable<IUser> {
    return this.http.post<IUser>("/api/user/edit", data, { withCredentials: true })
  }
  isAuth(): Observable<IUser | undefined> {
    return this.http.get<IUser | undefined>("/api/user/isAuth", { withCredentials: true }).pipe(
      tap((u: IUser) => this._currentUser.next(u)))
  }
}
