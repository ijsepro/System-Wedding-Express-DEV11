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
  userdetail:any[];
  id:number;

  constructor(private service:UserdetailService) { }

  ngOnInit() {
    this.service.getAll().subscribe(Response=>{this.userdetail=Response.json();
    console.log(Response.json());
  })
  }
  updateUserDetail(userForm){
    let u={userData:userForm.value};
    let user={
      id:u.userData.id,
      aboutMe:u.userData.aboutMe,
      age:u.userData.age,
      email:u.userData.email,
      fullName:u.userData.fullName,
      partenerName:u.userData.partenerName,
      userName:u.userData.userName,
      user_uid:u.userData.user_uid,
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
}
