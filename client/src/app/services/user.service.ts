import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from '../interfaces/user';

@Injectable()
export class UserService {
  get isLogged(): boolean {
    return !!localStorage.getItem("isLogged")
  }
  constructor(private http: HttpClient) { }

  register(body: Object): Observable<IUser> {
    return this.http.post<IUser>(`/api/user/register`, body, { withCredentials: true }).pipe(tap((x: IUser) => {
      localStorage.setItem("isLogged", "true")
    }))
  }
  login(body: Object): Observable<IUser> {
    return this.http.post<IUser>(`/api/user/login`, body, { withCredentials: true }).pipe(tap((x: IUser) => {
      localStorage.setItem("isLogged", "true")
    }))
  }
  logout(): Observable<any> {
    return this.http.post<any>(`/api/user/logout`, {}, { withCredentials: true }).pipe(tap(() => {
      localStorage.removeItem("isLogged")
    }))
  }
  getUser(): Observable<IUser> {
    return this.http.get<IUser>("/api/user/profile")
  }
}
