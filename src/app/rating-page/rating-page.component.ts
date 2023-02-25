import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.css']
})
export class RatingPageComponent implements OnInit {
  starRating = 0;


  constructor() { }

  ngOnInit(): void {

  }

show()
{
  console.log(this.starRating);
}
}
