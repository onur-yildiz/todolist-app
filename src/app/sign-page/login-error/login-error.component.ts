import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css']
})
export class LoginErrorComponent implements OnInit {
  counter: number = 3;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    setInterval(() => {
      this.counter--
    }, 1000);
    setTimeout(() => {
      this.router.navigate(['../login'], {relativeTo: this.route})
    }, 3000);
  }

}
