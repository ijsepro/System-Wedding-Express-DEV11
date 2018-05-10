import { element } from 'protractor';
import { LogInServiceService } from './../services/login.service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppError } from './../common/app-error';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private afAuth: AngularFireAuth, private service: LogInServiceService ,private fb: FormBuilder) { 
    this.userForm = fb.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }
  txtpassword: string ='';
  txtemail:string='';

  email:string ='';
  password:string ='';
  titleAlert:string = 'This field is required';
  ngOnInit() {
  
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  validation(validationForm){
    this.email =validationForm.email;
    this.password=validationForm.password;
  }
  

  searchUser(UserForm){
    let u={userData: UserForm.value};
     let user={email: u.userData.email, 
      password: u.userData.password, 
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
