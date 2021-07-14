import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { UploadService } from 'src/app/services/upload.service';
import { timer } from "rxjs"
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  isLoading: Boolean = false
  imgNameAndSize: string = "Choose Movie Image"
  trailerNameAndSize: string = "Choose Movie Trailer under 100MB"
  imageFile: File = undefined
  trailerFile: File = undefined
  imgfileError: string
  trailerFileError: string

  get error(): string {
    return this.alertService.error
  }

  constructor(private movieService: MovieService, private uploadService: UploadService, private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  submitHandler(fV: IMovie): void {
    const data = {
      author: fV.author,
      description: fV.description,
      genre: fV.genre,
      name: fV.name,
    }
    this.isLoading = true
    Promise.all([
      this.uploadService.upload(this.imageFile).toPromise(),
      this.uploadService.upload(this.trailerFile).toPromise(),
    ]).then(x => {
      const image = x.find(file => file.video === undefined)
      const trailer = x.find(file => file.video !== undefined)      
      
      Object.assign(data, { trailerID: trailer.public_id, trailerUrl: trailer.url, imageID: image.public_id, imageUrl: image.url })
      this.movieService.createMovie(data as IMovie).subscribe(
        res => {
          this.isLoading = false
          this.router.navigate(["/browse"])
        },
        err => {
          this.isLoading = false
          this.alertService.reset(err.error.message)
        })
    })
  }
  onImgChange(event): void {
    const [file] = event.target.files
    const { name: fileName, size } = file;
    const fileSize = (size / 1000).toFixed(2);
    this.imgNameAndSize = `${fileName} - ${fileSize}KB`;
    if (!["image/jpg", "image/jpeg", "image/png"].includes(file.type)) {
      this.imageFile = undefined
      this.imgfileError = "Image should be in image format"
      return undefined
    }
    this.imgfileError = undefined
    this.imageFile = file
  }
  onTrailerChange(event): void {
    const [file] = event.target.files
    const { name: fileName, size } = file;
    const fileSize = (size / 1000).toFixed(2);
    this.trailerNameAndSize = `${fileName} - ${fileSize}KB`;
    if (!["video/mp4", "video/mov", "video/wmv", "video/avi"].includes(file.type)) {
      this.trailerFile = undefined
      this.trailerFileError = "Trailer should be in video format"
      return undefined
    }
    if(Number(fileSize) > 100000) {
      this.trailerFile = undefined
      this.trailerFileError = "Trailer should be under 100MB"
      return undefined
    }
    this.trailerFileError = undefined
    this.trailerFile = file
  }
}
