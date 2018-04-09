import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent {

  rForm: FormGroup;
  post: any;
  description:string = '';
  name:string ='';
  titleAlert:string = 'This field is required';

  constructor(private fb: FormBuilder){
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'username' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      'address' : [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'age' : [null, Validators.compose([Validators.required, Validators.min(16)])],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    });
  }

  addPos(post){
    this.description = post.description;
    this.name = post.name;
  }

}
