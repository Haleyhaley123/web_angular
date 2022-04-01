import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public profileForm = new FormGroup({
    userName: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    passwordAgain: new FormControl('')
  });

  
  

  constructor() { }

  ngOnInit(): void {
  }

  
  public onSubmit() {
    console.log('onSubmit');
    
  }
}




