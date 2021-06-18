import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from "../../interfaces/movie"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: IMovie[]

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.loadMovies().subscribe(x => this.movies = x)
  }
}
