import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AccSettingsComponent } from './candidate/acc-settings/acc-settings.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  innerHeight: any;
  innerWidth: any;
  constructor(private router: Router, private http: Http ){
    this.innerHeight = (window.screen.height) + "px";
        this.innerWidth = (window.screen.width) + "px";
  }
}
