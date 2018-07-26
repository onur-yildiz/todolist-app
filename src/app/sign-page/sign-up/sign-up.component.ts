import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('passwordCheck') password: ElementRef;
  registerForm: FormGroup;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.userService.signup(this.registerForm.value);
    this.router.navigate(['/']);
  }

  initForm() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email, this.emailValidator.bind(this)]),
      'phoneNum': new FormControl(null),
      'password': new FormControl(null, Validators.required)
    });
  }

  emailValidator(control: FormControl): {[key: string]: boolean} {
    for (const user of this.userService.users) {
      if (user.email === control.value) {
        return {'existingEmail': true};
      }
      return null;
    }
  }
}
