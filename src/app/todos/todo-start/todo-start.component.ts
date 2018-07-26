import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-start',
  templateUrl: './todo-start.component.html',
  styleUrls: ['./todo-start.component.css']
})
export class TodoStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      if (document.getElementById('start')) {
        document.getElementById('start').classList.add('start-anim');
      }
    }, 300);
  }

}
