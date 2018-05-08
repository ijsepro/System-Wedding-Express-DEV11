import { inject } from '@angular/core/testing';
import { ApponimentService } from './../../services/apponiment.service';
import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) data: any) { console.log("data ", data) }

  ngOnInit() {
  }

}
