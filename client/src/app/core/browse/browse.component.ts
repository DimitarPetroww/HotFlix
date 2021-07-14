import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';
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
  isLoading: Boolean = false
  
  get error(): string {
    return this.alertService.error
  }
  constructor(private movieService: MovieService, private route: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.route.queryParams.pipe(switchMap(params => {
      this.page = Number(params.page) || 1
      return this.movieService.loadNextMovies((this.page - 1) * 4)
    })).subscribe(
      movies => {
        this.isLoading = false
        this.movies = movies
      },
      err => {
        this.isLoading = false
        this.alertService.reset(err.error.message)
      })
    this.movieService.loadAllMovies().subscribe(x => {
      this.pages = Array.from({ length: Math.ceil(x.length / 4) }, (v, i) => i + 1)
    })
  }
}
