import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../sign-page/user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  loggedIn = false;
  navLocation: number;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.userAction
      .subscribe(
        () => {this.loggedIn = this.userService.signCheck()}
      );
    setTimeout(() => {
      document.getElementById('transition-box').classList.add('fade-out');
    }, 50);
  }

  onNewPage(location: number) {
    document.getElementById('transition-box').classList.remove('fade-out');
    setTimeout(() => {
      document.getElementById('transition-box').classList.add('fade-out');
    }, 50);
  }
  
  onLogout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
  }

}
