import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number =6.9271;
  lng: number = 79.8612;

 
  constructor() { }

  ngOnInit() {
  }

}
