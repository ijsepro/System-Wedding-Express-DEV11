import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountsettingsService} from "../../services/accountsettings.service";


@Component({
  selector: 'app-acc-settings',
  templateUrl: './acc-settings.component.html',
  styleUrls: ['./acc-settings.component.css']
})
export class AccSettingsComponent implements OnInit {

  Vendors : any[];
  hasMatch: boolean = false;

accountForm :FormGroup;
titleAlert:string = 'This field is required';
titleAlert1:string ='Please enter the password in correct format';
CurrentPassword:string='';
NewPassword:string='';
ConfirmPassword :string='';
email : string='';


  constructor(private fb: FormBuilder , private service:AccountsettingsService) {
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

  deleteAccount(accountForm){
    this.service.deleteAccount(this.accountForm)
      .subscribe(Response => {
        let index = this.Vendors.indexOf(this.accountForm);
        this.Vendors.splice(index, 1);
      });
  }

  updateData(accountForm){
    let a={alienFormData: accountForm.value};
    let alien={current: a.alienFormData.CurrentPassword, new: a.alienFormData.NewPassword, confirm: a.alienFormData.ConfirmPassword};
    this.service.updatePost(alien)
    .subscribe(Response => {
      console.log(alien);
    });
  }


  ngOnInit() {
  }

}
