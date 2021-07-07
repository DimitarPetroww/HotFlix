import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  fileNameAndSize: string = "Choose Movie Image"
  file: File
  error: Error

  constructor(private movieService: MovieService, private uploadService: UploadService, private router: Router) { }

  ngOnInit(): void {
  }
  submitHandler(fV: IMovie): void {
    const data = {
      author: fV.author,
      description: fV.description,
      genre: fV.genre,
      name: fV.name,
      trailerID: fV.trailerID
    }
    this.uploadService.upload(this.file).toPromise().then(x => {
      Object.assign(data, { imageUrl: x.url })
      this.movieService.createMovie(data as IMovie).subscribe(
        res => {
          this.router.navigate(["/browse"])
        },
        err => {
          this.error = err.error.message
        }
      )
    })
  }
  onFileChange(event): void {
    const [file] = event.target.files
    this.file = file
    const { name: fileName, size } = file;
    const fileSize = (size / 1000).toFixed(2);
    this.fileNameAndSize = `${fileName} - ${fileSize}KB`;
  }
}
