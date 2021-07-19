import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router"
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IMovie } from 'src/app/interfaces/movie';
import { AlertService } from 'src/app/services/alert.service';
import { MovieService } from "../../services/movie.service"

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isLoading: Boolean = false
  movieId: string;
  data: IMovie;

  get error(): string {
    return this.alertService.error
  }
  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.route.params.pipe(switchMap(params => {
      this.movieId = params.id
      return this.movieService.loadMovieById(this.movieId)
    })).subscribe(
      movie => {
        this.data = movie
        this.isLoading = false
      },
      err => {
        this.isLoading = false
        this.alertService.reset(err.error.message)
      })
  }
  submitHandler(fV: IMovie): void {
    const data = {
      author: fV.author,
      description: fV.description,
      genre: fV.genre,
      name: fV.name,
    }
    this.isLoading = true
    this.movieService.editMovie(this.movieId, data as IMovie)
      .subscribe(
        res => {
          this.isLoading = false
          this.router.navigate(["/movies/details", this.movieId])
        },
        err => {
          this.isLoading = false
          this.alertService.reset(err.error.message)
        })
  }
}
