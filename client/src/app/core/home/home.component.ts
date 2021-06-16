import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies = [
    {
      title: "Tenet",
      description: "alalballablbalballbalblasdlasdldasldsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadasdasdasdasdasdasdasdasdasddasdsadasdasd",
      imageUrl: "https://i1.sndcdn.com/artworks-IVuXWwqeXqLZ2KuG-mXS3ng-t500x500.jpg",
      rating: 8.5,
      genres: ["action", "sci-fi"]
    },
    {
      title: "Kong vs Godzilla",
      description: "alalballablbalballbalblasdlasdldasldsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadasdasdasdasdasdasdasdasdasddasdsadasdasd",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMzk2ZmYxNTUtODlhMi00NzE2LTkwMTctYjg0ODQ1ZjkyNzJmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      rating: 3.5,
      genres: ["action", "fantastic"]
    },
    {
      title: "Mortal Kombat",
      description: "alalballablbalballbalblasdlasdldasldsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadasdasdasdasdasdasdasdasdasddasdsadasdasd",
      imageUrl: "https://aboveandbeyondthescreen.files.wordpress.com/2021/05/mortal-kombat-poster.jpeg",
      rating: 9.3,
      genres: ["action", "fantastic"]
    },
    {
      title: "Anabelle",
      description: "alalballablbalballbalblasdlasdldasldsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadasdasdasdasdasdasdasdasdasddasdsadasdasd",
      imageUrl: "https://assets.puzzlefactory.pl/puzzle/303/090/original.jpg",
      rating: 3.3,
      genres: ["horror", "trailer"]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
