import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-acc-settings',
  templateUrl: './acc-settings.component.html',
  styleUrls: ['./acc-settings.component.css']
})
export class AccSettingsComponent implements OnInit {

  constructor() { }
  form=new FormGroup({
    password: new FormControl('',[
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),

      Validators.minLength(8)
    ]),
    confirm_password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ])
  });

  ngOnInit() {

  }

  get password(){
    return this.form.get('password');
  }

  get confirm_password(){
    return this.form.get('confirm_password');
  }
}
