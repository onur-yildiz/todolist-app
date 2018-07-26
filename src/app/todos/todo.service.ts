import { Injectable } from '@angular/core';
import { Todo } from './todos.model';
import { Subject } from 'rxjs';
import { RecycleService } from '../recycle-list/recycle.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosChanged = new Subject<Todo[]>();

  private todos: Todo[] = [];

  constructor(private recycleService: RecycleService) { }

  findIndexFromId(id: string) {
    return this.todos.findIndex(todo => todo.id === id);
  }

  getList() {
    return this.todos.slice();
  }

  getTodo(id: string) {
    const index = this.findIndexFromId(id);
    return this.todos[index];
  }

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    this.todosChanged.next(this.todos.slice());
  }

  updateTodo(id: string, newTodo: Todo) {
    const index = this.findIndexFromId(id);
    this.todos[index] = newTodo;
    this.todosChanged.next(this.todos.slice());
  }
  
  sendToRecycle(todo: Todo) {
    this.recycleService.addTodo(todo);
    this.deleteTodo(todo.id);
  }

  deleteTodo(id: string) {
    const index = this.findIndexFromId(id);
    this.todos.splice(index, 1);
    this.todosChanged.next(this.todos.slice());
  }

  allToRecycle() {
    this.recycleService.addTodos(this.todos);
    this.todos = [];
    this.todosChanged.next(this.todos.slice());
  }

  eraseAll() {
    this.todos = [];
    this.todosChanged.next(this.todos.slice());
  }

  saveItems() {
    let items = [];
    for (const todo of this.todos) {
      items.push(todo.id);
    }
    return items;
  }
}
