import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/movie';

@Injectable()

export class MovieService {

  constructor(private http: HttpClient) { }

  loadMovies(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>("/api/movies")
  }
  loadMovieById(id): Observable<IMovie> {
    return this.http.get<IMovie>("/api/movies/" + id)
  }
}
