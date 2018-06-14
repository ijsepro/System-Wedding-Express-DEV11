import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import  { VendordetailService } from './../../services/vendordetail.service'; 
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';

@Component({
  selector: 'app-v-dashboard',
  templateUrl: './v-dashboard.component.html',
  styleUrls: ['./v-dashboard.component.css']
})
export class VDashboardComponent implements OnInit {

  textUser:string='';
  textLocation:string='';

  rForm: FormGroup;
  post: any;
  titleAlert:string = 'This field is required';
  name:string='';
  company:string='';
  number:string='';

  constructor(private service:VendordetailService, fb:FormBuilder) {
    this.rForm = fb.group({
      'email' : [null, Validators.required],
      'name' : [null, Validators.required],
      'username' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      'company' : [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'number' : [null, Validators.compose([Validators.required, Validators.min(16)])],
      'location' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
     
    });
   }

   validation(validationForm){
    this.company = validationForm.company;
    this.number = validationForm.number;
    this.name = validationForm.name;
  }

  ngOnInit() {
  }

  updateVendor(rForm){
    let u={userData:rForm.value};
    let vendor={
      email:u.userData.email,
      fullName:u.userData.name,
      compnay:u.userData.company,
      location:u.userData.location,
      number:u.userData.number,
    };
    console.log("ukasn")
    this.service.updatePost(vendor).subscribe(
      newUser=>{
        console.log("aawa")
        console.log(newUser);
        console.log("hari")
      },
      (error: AppError) => {
        if(error instanceof NotFoundError){
          alert("Not found requested data...");
        }
        else throw error;
       } );
  }

}
