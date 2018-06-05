import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-florists',
  templateUrl: './florists.component.html',
  styleUrls: ['./florists.component.css']
})
export class FloristsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
