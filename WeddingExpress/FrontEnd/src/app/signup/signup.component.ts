import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupServiceService } from '../services/signup-service.service';
import { NotFoundError } from '../common/not-found-error';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hasMatch: boolean = false;

  textDes:string ='';
  textPartner:string='';
  textUser:string='';

  rForm: FormGroup;
  post: any;
  email: string = ''; name: string = ''; username: string = ''; password: string = '';
  rePassword: string = ''; phoneNumber: string = ''; checkbox: string = '';
  titleAlert:string = 'This field is required';

  constructor(private afAuth: AngularFireAuth, private service: SignupServiceService,private fb: FormBuilder) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      'email' : [null, Validators.compose([Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])]) ],
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      'username' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      'password' : [null, Validators.compose([Validators.required, Validators.pattern('^(?=.*\d).{4,20}$')])],
      'rePassword' : [null, Validators.required],
      'phoneNumber' : [null, Validators.compose([Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.minLength(10), Validators.maxLength(10)])],
      'checkbox' : [null, Validators.required],
    });
  }

  hasMatched(){
    if(this.password === this.rePassword){
      // Validators.required
      this.hasMatch = true;
    }else{
      return this.hasMatch = false;
    }
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  validation(userForm){
    this.email = userForm.email;
    this.name = userForm.name;
    this.username =  userForm.username;
    this.password = userForm.password;
    this.rePassword =  userForm.rePassword;
    this.checkbox = userForm.checkbox;

  }

  createUser(UserForm){
    let u={userData: UserForm.value};
     let user={email: u.userData.email, 
      fullName: u.userData.fullName, 
      userName: u.userData.userName,
      password: u.userData.password,
      };
    //  this.aliens.splice(0, 0, alien);


     this.service.create(user)
     .subscribe(
       newUser=>{
       console.log(newUser);
     },
      (error: AppError) => {
        // this.aliens.splice(0, 1);        

        if(error instanceof NotFoundError){
          alert("Not found requested data...");
        }
        else throw error; //it will handle on golable error handler
      });
  }

}
