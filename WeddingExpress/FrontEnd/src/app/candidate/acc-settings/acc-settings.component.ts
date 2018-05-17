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

  hasMatch: boolean = false;

accountForm :FormGroup;
titleAlert:string = 'This field is required';
titleAlert1:string ='Please enter the password in correct format';
CurrentPassword:string='';
NewPassword:string='';
ConfirmPassword :string='';
txtcurrentpswd:string='';

  constructor(private fb: FormBuilder) { 
    this.accountForm = fb.group({
      'CurrentPassword' : [null, Validators.required],
      'NewPassword' : [null, Validators.compose([Validators.required,Validators.pattern('^(?=.*\[A-Z]).{4,20}$')])] ,
      'ConfirmPassword': [null, Validators.required]
    });
  }

  hasMatched(rePass: any){
    if(this.NewPassword === rePass.value){
      this.hasMatch = true;
    }else{
      
      return this.hasMatch = false;
    }
  }

  validation(validationForm){
    this.CurrentPassword =validationForm.CurrentPassword;
    this.NewPassword =validationForm.NewPassword;
    this.ConfirmPassword =validationForm.ConfirmPassword;
  
  }

  ngOnInit() {
  }

}
