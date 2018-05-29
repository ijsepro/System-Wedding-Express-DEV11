import { AppError } from './../../common/app-error';
import { NotFoundError } from './../../common/not-found-error';
import { VendorSignupService } from './../../services/vendor-signup.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-vendor-signup',
  templateUrl: './vendor-signup.component.html',
  styleUrls: ['./vendor-signup.component.css']
})
export class VendorSignupComponent implements OnInit {
  hasMatch: boolean = false;
  
    textDes:string ='';
    textPartner:string='';
    textUser:string='';
  
    rForm: FormGroup;
    post: any;
    email: string = ''; name: string = ''; username: string = ''; password: string = '';
    rePassword: string = ''; mobile: string = ''; checkbox: string = '';
    Location:string ='';Category:string='';

    titleAlert:string = 'This field is required';
  constructor(private afAuth: AngularFireAuth, private service: VendorSignupService,private fb: FormBuilder) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      'email' : [null, Validators.compose([Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])]) ],
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      'username' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      'password' : [null, Validators.compose([Validators.required, Validators.pattern('^(?=.*\[A-Z]).{4,20}$')])],
      'rePassword' : [null, Validators.required],
      'mobile' : [null, Validators.compose([Validators.required, Validators.pattern('^[0-9\ \(\)\+]{10}$'), Validators.minLength(10), Validators.maxLength(10)])],
      'Location':  [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      'Category': [null, Validators.required],
      // 'checkbox' : [null, Validators.required],
    });
  }
  hasMatched(rePass: any){
    if(this.password === rePass.value){
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
    this.Location=userForm.Location;
    this.Category=userForm.Category;
    this.checkbox = userForm.checkbox;

  }
  createUser(UserForm){
    let u={userData: UserForm.value};
     let user={email: u.userData.email, 
      fullName: u.userData.name,
      userName: u.userData.username,
      password: u.userData.password,
      phoneNumber: u.userData.phoneNumber
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
