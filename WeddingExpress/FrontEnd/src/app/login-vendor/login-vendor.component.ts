import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NotFoundError } from '../common/not-found-error';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppError } from './../common/app-error';
import { element } from 'protractor';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { LogInVendorServiceService } from './../services/login-vendor.service.service';

@Component({
  selector: 'app-login-vendor',
  templateUrl: './login-vendor.component.html',
  styleUrls: ['./login-vendor.component.css']
})
export class LoginVendorComponent implements OnInit {

  userForm1: FormGroup;

  constructor(private afAuth: AngularFireAuth, private service: LogInVendorServiceService ,private fb: FormBuilder) { 
    this.userForm1 = fb.group({
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
  
  searchUser1(userForm1){
    let u={userData: userForm1.value};
     let user={email: u.userData.email1, 
      password: u.userData.password1, 
    };

      this.service.search(user)
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
