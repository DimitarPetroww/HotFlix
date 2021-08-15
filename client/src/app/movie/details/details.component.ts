import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IMovie } from 'src/app/interfaces/movie';
import { IUser } from 'src/app/interfaces/user';
import { AlertService } from 'src/app/services/alert.service';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movieId: string
  movie: IMovie
  isLiked: boolean
  comments: any[]
  user: IUser
  isLoading: Boolean = false
  get error(): string {
    return this.alertService.error
  }

  constructor(private route: ActivatedRoute, private movieService: MovieService, private userService: UserService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true
    this.userService.getUser().pipe(switchMap((x: IUser) => {
      this.user = x
      return this.route.params
    }), switchMap(params => {
      this.movieId = params.id
      return this.movieService.loadMovieById(this.movieId)
    })).subscribe(movie => {
      this.isLoading = false
      this.movie = movie
      this.isLiked = this.movie.likes.some(x => x == this.user._id)
      this.assignComments(movie.comments)
    }, this.errorHandler)
  }
  likeMovie() {
    this.isLoading = true
    this.movieService.likeMovie(this.movieId).subscribe(x => {
      this.isLoading = false
      this.movie = x
      this.isLiked = this.movie.likes.some(x => x == this.user._id)
    }, this.errorHandler)
  }
  deleteMovie() {
    this.isLoading = true
    this.movieService.deleteMovie(this.movieId).subscribe(x => {
      this.isLoading = false
      this.router.navigate(["/browse"])
    }, this.errorHandler)
  }

  comment(fV) {
    this.isLoading = true
    Object.assign(fV, { movie: this.movieId })
    this.movieService.comment(fV).subscribe(x => {
      this.isLoading = false
      this.assignComments(x)
    }, this.errorHandler)
  }
  deleteComment(commentId: string) {
    this.isLoading = true
    this.movieService.deleteComment(commentId).subscribe(x => {
      this.isLoading = false
      this.assignComments(x)
    }, this.errorHandler)
  }
  likeComment(target: HTMLElement, commentId: string) {

    if (target.classList.contains("disabled")) {
      return
    }
    this.isLoading = true
    this.movieService.likeComment(commentId, this.movieId).subscribe(x => {
      this.isLoading = false
      this.assignComments(x)
    }, this.errorHandler)
  }
  dislikeComment(target: HTMLElement, commentId: string) {
    this.isLoading = true
    if (target.classList.contains("disabled")) {
      return
    }
    this.movieService.dislikeComment(commentId, this.movieId).subscribe(x => {
      this.isLoading = false
      this.assignComments(x)
    }, this.errorHandler)
  }
  private assignComments(comments: any[]): void {
    this.comments = comments
    this.comments.map(x => x.isLiked = x.likes.some((y: string) => y == this.user._id))
  }
  private errorHandler(err) {
    this.alertService.reset(err.error.message)
    this.isLoading = false
  }
}
