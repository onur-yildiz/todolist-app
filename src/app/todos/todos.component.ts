import { Component, OnInit } from '@angular/core';
import { UserService } from '../sign-page/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.signCheck();
  }


}
