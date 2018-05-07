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

  textDes:string ='';
  textPartner:string='';
  textUser:string='';

  rForm: FormGroup;
  post: any;
  description:string = '';
  name:string ='';
  titleAlert:string = 'This field is required';

  constructor(private afAuth: AngularFireAuth, private service: SignupServiceService, fb: FormBuilder) {
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      // 'username' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      // 'address' : [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      // 'age' : [null, Validators.compose([Validators.required, Validators.min(16)])],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    });
   }

  ngOnInit() {
   
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  validation(userForm){
    this.description = userForm.description;
    this.name = userForm.name;
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
