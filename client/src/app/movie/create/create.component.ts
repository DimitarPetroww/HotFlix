import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public fileNameAndSize: string = "Choose Movie Image"

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  submitHandler(fV) {
    this.movieService.createMovie(fV).subscribe({
      next: (x) => {
        console.log(x);
      },
      error: (error) => {
        console.log(error.message);
      }
    })
  }
  onFileChange(event) {
    const [file] = event.target.files
    const { name: fileName, size } = file;
    const fileSize = (size / 1000).toFixed(2);
    this.fileNameAndSize = `${fileName} - ${fileSize}KB`;
  }
}
