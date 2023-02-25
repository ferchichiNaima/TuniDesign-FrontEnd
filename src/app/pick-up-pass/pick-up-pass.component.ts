import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-up-pass',
  templateUrl: './pick-up-pass.component.html',
  styleUrls: ['./pick-up-pass.component.css']
})
export class PickUpPassComponent implements OnInit {
  test=!false;
  disabled = true;
  constructor() { }

  ngOnInit(): void {
  }

}
