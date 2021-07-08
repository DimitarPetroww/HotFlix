import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from "../../interfaces/movie"

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  movies: IMovie[]
  pages: Number[]
  page: number
  models: String[]

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(switchMap(params => {
      this.page = Number(params.page) || 1
      return this.movieService.loadNextMovies((this.page - 1) * 4)
    })).subscribe(movies => {
      this.movies = movies
    })

    this.movieService.loadAllMovies().subscribe(x => {
      this.pages = Array.from({ length: Math.ceil(x.length / 4) }, (v, i) => i + 1)
    })
  }
}
