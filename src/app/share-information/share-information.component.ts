import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-information',
  templateUrl: './share-information.component.html',
  styleUrls: ['./share-information.component.css']
})
export class ShareInformationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  confirm()
{
  this.router.navigate(['/sendPicture']);
}

}
