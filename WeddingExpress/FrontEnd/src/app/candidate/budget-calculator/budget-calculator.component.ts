import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-budget-calculator',
  templateUrl: './budget-calculator.component.html',
  styleUrls: ['./budget-calculator.component.css']
})
export class BudgetCalculatorComponent {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 

  constructor() { }

  ngOnInit() {
  }
 
}
export interface Element {
  name: number;
  position: string;
  weight: number;
  
}
const ELEMENT_DATA: Element[] = [
  {position: 'Venues', name:30 , weight: 0.00},
  {position: 'Salon', name: 20, weight:  0.00},
  {position: 'Video Graphy', name: 15, weight:  0.00},
  {position: 'Photo Graphy', name: 15, weight:  0.00},
  {position: 'Music', name: 10, weight:  0.00},
  {position: 'Flora', name:10, weight: 0.00}
];