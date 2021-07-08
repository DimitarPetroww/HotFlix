import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/movie';

@Injectable()

export class MovieService {

  constructor(private http: HttpClient) { }

  loadMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>("/api/movies", { withCredentials: true })
  }
  loadMovieById(id: String): Observable<IMovie> {
    return this.http.get<IMovie>("/api/movies/" + id, { withCredentials: true })
  }
  createMovie(data: IMovie): Observable<IMovie> {
    return this.http.post<IMovie>("/api/movies", data, { withCredentials: true })
  }
}
