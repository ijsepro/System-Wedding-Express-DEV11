import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-acc-settings',
  templateUrl: './acc-settings.component.html',
  styleUrls: ['./acc-settings.component.css']
})
export class AccSettingsComponent implements OnInit {

accountForm :FormGroup;
titleAlert:string = 'This field is required';
CurrentPassword:string='';
NewPassword:string='';
ConfirmPassword :string='';
txtcurrentpswd:string='';

  constructor(private fb: FormBuilder) { 
    this.accountForm = fb.group({
      'CurrentPassword' : [null, Validators.required],
      'NewPassword' : [null, Validators.required],
      'ConfirmPassword': [null, Validators.required]
    });
  }

  validation(validationForm){
    this.CurrentPassword =validationForm.CurrentPassword;
    this.NewPassword =validationForm.NewPassword;
    this.ConfirmPassword =validationForm.ConfirmPassword;
  
  }

  ngOnInit() {
  }

}
