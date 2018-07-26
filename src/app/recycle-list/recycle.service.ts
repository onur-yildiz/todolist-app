import { Injectable } from "@angular/core";
import { Todo } from "../todos/todos.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecycleService {
  listChanged = new Subject<Todo[]>();
  recycleList: Todo[] = [];

  constructor() {}

  findIndexFromId(id: string) {
    return this.recycleList.findIndex(todo => todo.id === id);
  }

  getTodo(id: string) {
    const index = this.findIndexFromId(id);
    return this.recycleList[index];
  }

  getList() {
    return this.recycleList.slice();
  }

  addTodo(newTodo: Todo) {
    this.recycleList.push(newTodo);
    this.listChanged.next(this.recycleList.slice());
  }

  addTodos(todos: Todo[]) {
    for (const todo of todos) {
      this.recycleList.push(todo);
    }
    this.listChanged.next(this.recycleList.slice());
  }

  deleteTodo(todo: Todo) {
    const index = this.recycleList.indexOf(todo);
    this.recycleList.splice(index, 1);
    this.listChanged.next(this.recycleList.slice());
  }

  deleteAll() {
    this.recycleList = [];
    this.listChanged.next(this.recycleList.slice());
  }

}