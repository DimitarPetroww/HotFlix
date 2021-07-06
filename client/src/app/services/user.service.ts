import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  register(body: Object): Observable<IUser> {
    return this.http.post<IUser>(`/api/user/register`, body, { withCredentials: true })
  }
}
