import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupServiceService } from '../services/signup-service.service';
import { NotFoundError } from '../common/not-found-error';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private service: SignupServiceService) { }

  ngOnInit() {
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
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
