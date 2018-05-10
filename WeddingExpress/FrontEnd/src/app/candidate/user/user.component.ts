import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { UserdetailService } from './../../services/userdetail.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  textEmai:String='';
  textDes:string ='';
  textPartner:string='';
  textUser:string='';

  rForm: FormGroup;
  post: any;
  description:string = '';
  name:string ='';
  titleAlert:string = 'This field is required';

  constructor(private service:UserdetailService , fb: FormBuilder) { 
    this.rForm = fb.group({
      'email' : [null, Validators.required],
      'name' : [null, Validators.required],
      'username' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      'address' : [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'age' : [null, Validators.compose([Validators.required, Validators.min(16)])],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'partner' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(500)])],
    });
  }

  ngOnInit() {
  
  }
  validation(validationForm){
    this.description = validationForm.description;
    this.name = validationForm.name;
  }

updateUser(UserForm){
    let u={userData:UserForm.value};
    let user={
      id:u.userData.id,
      aboutMe:u.userData.description,
      age:u.userData.age,
      email:u.userData.email,
      fullName:u.userData.name,
      address:u.userData.address,
      partenerName:u.userData.partner,
      userName:u.userData.username,
    
     
    };
    this.service.create(user).subscribe(
      newUser=>{
        console.log(newUser);
      },
      (error: AppError) => {
        if(error instanceof NotFoundError){
          alert("Not found requested data...");
        }
        else throw error;
       } );
  }

  // searchUser(UserForm){
  //   let u={userData:UserForm.value};
  //   let user={
  //     // id:u.userData.id,
  //     // aboutMe:u.userData.aboutMe,
  //     // age:u.userData.age,
  //     email:u.userData.email,
  //     // fullName:u.userData.fullName,
  //     // partenerName:u.userData.partenerName,
  //     // userName:u.userData.userName,
    
     
  //   };
  //   this.service.search(user).subscribe(
  //     newUser=>{
  //       console.log(newUser);
  //     },
  //     (error: AppError) => {
  //       if(error instanceof NotFoundError){
  //         alert("Not found requested data...");
  //       }
  //       else throw error;
  //      } );
  // }
}
