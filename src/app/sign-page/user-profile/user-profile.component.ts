import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Subscription } from '../../../../node_modules/rxjs';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user: User;
  userSubscription: Subscription;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getUserInfo();
    this.userSubscription = this.userService.userAction
      .subscribe(
        (updateUser: User) => {
          this.user = updateUser;
        }
      );
  }

  onDeleteAccount() {
    if (confirm('Are you sure?')) {
      this.userService.deleteUser();
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
