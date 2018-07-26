import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../todos/todos.model';
import { RecycleService } from './recycle.service';
import { TodoService } from '../todos/todo.service';
import { UserService } from '../sign-page/user.service';

@Component({
  selector: 'app-recycle-list',
  templateUrl: './recycle-list.component.html',
  styleUrls: ['./recycle-list.component.css']
})
export class RecycleListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  searchQuery = '';
  recycleSub: Subscription;
  pageSize = 6;
  pageCount: number;
  pageArray = [];
  activePage = 1;
  sortBy = 'date';
  order = true;
  searchBy = 'name';

  constructor(private recycleService: RecycleService,
              private userService: UserService,
              private todoService: TodoService) { }

  ngOnInit() {
    this.userService.signCheck();
    this.todos = this.recycleService.getList();
    this.recycleSub = this.recycleSub = this.recycleService.listChanged
      .subscribe(
        (newTodos: Todo[]) => {
          this.todos = newTodos;
          this.setupPages();
        }
      );
    this.setupPages();
  }

  setupPages() {
    this.pageCount = Math.ceil(this.todos.length / this.pageSize);
    this.pageArray = new Array(this.pageCount).fill(0);
  }

  onDeleteAll() {
    this.recycleService.deleteAll();
  }

  onRecycleAll() {
    for (const todo of this.todos) {
      this.todoService.addTodo(todo);
    }
    this.recycleService.deleteAll();
  }

  ngOnDestroy() {
    this.recycleSub.unsubscribe();
  }

}
