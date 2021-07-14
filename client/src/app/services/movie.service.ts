import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces/comment';
import { IMovie } from '../interfaces/movie';

@Injectable()

export class MovieService {

  constructor(private http: HttpClient) { }

  loadNextMovies(offset: number): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`/api/movies?offset=${offset}`, { withCredentials: true })
  }
  loadAllMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`/api/movies`, { withCredentials: true })
  }
  loadMovieById(id: String): Observable<IMovie> {
    return this.http.get<IMovie>("/api/movies/" + id, { withCredentials: true })
  }
  createMovie(data: IMovie): Observable<IMovie> {
    return this.http.post<IMovie>("/api/movies", data, { withCredentials: true })
  }
  editMovie(id: string, data: IMovie) {
    return this.http.patch<IMovie>("/api/movies/" + id, data, { withCredentials: true })
  }
  deleteMovie(id: string) {
    return this.http.delete<IMovie>("/api/movies/" + id, { withCredentials: true })
  }
  likeMovie(movieId: string): Observable<IMovie> {
    return this.http.put<IMovie>("/api/movies/like", { movieId }, { withCredentials: true })
  }
  comment(data: { message: string, movie: string }): Observable<IComment[]> {
    return this.http.post<IComment[]>("/api/movies/comment", data, { withCredentials: true })
  }
  deleteComment(commentId) {
    return this.http.delete<IComment[]>("/api/movies/comment/" + commentId, { withCredentials: true })
  }
  likeComment(commentId, movieId) {
    return this.http.put<IComment[]>("/api/movies/comment/like", { commentId, movieId }, { withCredentials: true })
  }
  dislikeComment(commentId, movieId) {
    return this.http.put<IComment[]>("/api/movies/comment/dislike", { commentId, movieId }, { withCredentials: true })
  }
}
