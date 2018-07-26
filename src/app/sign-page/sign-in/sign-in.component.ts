import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { UserService } from '../user.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.userService.signin(this.loginForm.value);
  }

  initForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

}
