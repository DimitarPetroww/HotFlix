import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      return this.movieService.loadMovieById(params.id)
    })).subscribe(movie => this.movie = movie)
  }

}
