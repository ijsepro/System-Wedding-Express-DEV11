import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { VendorServiceService } from './../../services/vendor.service';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {

  vendorForm: FormGroup;

  constructor(private afAuth: AngularFireAuth, private service: VendorServiceService ,private fb: FormBuilder) { 
    this.vendorForm = fb.group({
      'email1' : [null, Validators.required],
      'password1' : [null, Validators.required]
    });
  }

  txtpassword1: string ='';
  txtemail1:string='';

  email1:string ='';
  password1:string ='';
  titleAlert:string = 'This field is required';
  

  ngOnInit() {
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  validation(validationForm){
    this.email1 =validationForm.email;
    this.password1=validationForm.password;
  }
  
  searchVendor(vendorForm){
    let u={userData: vendorForm.value};
     let vendor={email: u.userData.email1, 
      password: u.userData.password1, 
    };

      this.service.authVendor(vendor)
     .subscribe(
       response=>{
       console.log(response);
     },
     
      (error: AppError) => {       

        if(error instanceof NotFoundError){
          alert("Not found requested data...");
        }
        else throw error; //it will handle on golable error handler
      });
  }

}
