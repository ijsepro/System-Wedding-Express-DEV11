import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  innerHeight: any;
  innerWidth: any;
  constructor(private router: Router, private http: HttpClientModule){
    this.innerHeight = (window.screen.height) + "px";
        this.innerWidth = (window.screen.width) + "px";
  }
}
