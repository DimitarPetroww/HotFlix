import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IComment } from 'src/app/interfaces/comment';
import { IMovie } from 'src/app/interfaces/movie';
import { IUser } from 'src/app/interfaces/user';
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
  error: string

  constructor(private route: ActivatedRoute, private movieService: MovieService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(x => {
      this.user = x
    }, (err) => this.error = err.error.message)
    this.route.params.pipe(switchMap(params => {
      this.movieId = params.id
      return this.movieService.loadMovieById(this.movieId)
    })).subscribe(movie => {
      this.movie = movie
      this.isLiked = this.movie.likes.some(x=> x == this.user._id)
      
      this.assignComments(movie.comments)
    }, (err) => this.error = err.error.message)
  }
  likeMovie() {
    this.movieService.likeMovie(this.movieId).subscribe(x=> {
      this.movie = x
      this.isLiked = this.movie.likes.some(x=> x == this.user._id)
    }, (err) => this.error = err.error.message)
  }

  comment(fV) {
    Object.assign(fV, { movie: this.movieId })
    this.movieService.comment(fV).subscribe(x => {
      this.assignComments(x)
    }, (err) => this.error = err.error.message)
  }
  deleteComment(commentId) {
    this.movieService.deleteComment(commentId).subscribe(x => {
      this.assignComments(x)
    }, (err) => this.error = err.error.message)
  }
  likeComment(target: HTMLElement, commentId) {
    if(target.classList.contains("disabled")) {
      return
    }
    
    this.movieService.likeComment(commentId, this.movieId).subscribe(x=> {
      this.assignComments(x)
    }, (err) => this.error = err.error.message)
  }
  dislikeComment(target: HTMLElement, commentId) {
    if(target.classList.contains("disabled")) {
      return
    }
    this.movieService.dislikeComment(commentId, this.movieId).subscribe(x=> {
      this.assignComments(x)
    }, (err) => this.error = err.error.message)
  }
  private assignComments(comments: any[]): void {
    this.comments = comments
    this.comments.map(x=> x.isLiked = x.likes.some((y: string)=> y == this.user._id))
  }
}
