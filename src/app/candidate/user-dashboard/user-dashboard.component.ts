import { AppoinmentComponent } from './../appoinment/appoinment.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  makeAppoinment(){
    this.dialog.open(AppoinmentComponent, {
      data: { name: "Wedded Photograpghy"}
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }

}
