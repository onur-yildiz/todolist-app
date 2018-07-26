import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../todos.model';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
