import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public fileNameAndSize: string = "Choose Movie Image"
  public file: File

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  submitHandler(fV: IMovie): void {
    this.movieService.createMovie(fV).subscribe({
      next: (x) => {
        console.log(x);
      },
      error: (error) => {
        console.log(error.message);
      }
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
