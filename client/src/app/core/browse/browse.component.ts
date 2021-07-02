import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from "../../interfaces/movie"

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  movies: IMovie[]

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.loadMovies().subscribe(x => this.movies = x)
  }
}
