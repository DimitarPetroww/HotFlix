import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IComment } from 'src/app/interfaces/comment';
import { IMovie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movieId: string
  movie: IMovie
  comments: IComment[]

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      this.movieId = params.id
      return this.movieService.loadMovieById(this.movieId)
    })).subscribe(movie => this.movie = movie)
  }
  comment(fV) {
    Object.assign(fV, {movie: this.movieId})
    this.movieService.comment(fV).subscribe(x=> {
      this.comments = x
    })
  }
}
