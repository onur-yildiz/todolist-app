import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../todos.model';
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { UserService } from '../../sign-page/user.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  todosSub: Subscription;
  pageSize = 6;
  pageCount: number;
  pageArray = [];
  activePage = 1;
  sortBy = 'date';
  searchQuery = '';
  order = true;
  searchBy = 'name';

  constructor(private todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {}

  ngOnInit() {
    this.userService.signCheck();
    this.todos = this.todoService.getList();
    this.todosSub = this.todoService.todosChanged
      .subscribe(
        (newTodos: Todo[]) => {
          this.userService.updateItems(newTodos);
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
    this.todoService.allToRecycle();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.todosSub.unsubscribe();
  }

}
