import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../todos.model';
import { TodoService } from "../todo.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecycleService } from '../../recycle-list/recycle.service';
import { UserService } from '../../sign-page/user.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;
  id: string;
  page: string;
  recycleMode = false;

  constructor(private todoService: TodoService,
              private recycleService: RecycleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          let elements = document.getElementsByClassName('detail');
          for (let i = 0; i < elements.length; i++) {
            document.getElementsByClassName('detail')[i].classList.remove('initialized');
          }
          this.id = params['id'];
          if (this.router.url.includes('recycle-bin')) {
            if (this.recycleService.findIndexFromId(this.id) === -1 ) { 
              this.router.navigate(['/']);
            }
            this.todo = this.recycleService.getTodo(this.id);
            this.recycleMode = true;
            console.log(this.recycleMode);
          } else {
            if (this.todoService.findIndexFromId(this.id) === -1 ) { 
              this.router.navigate(['/']);
            }
            this.todo = this.todoService.getTodo(this.id);
          }
          setTimeout(() => {
            for (let i = 0; i < elements.length; i++) {
              document.getElementsByClassName('detail')[i].classList.add('initialized');
            }
          }, 350);
        }
      );
  }

  onRecycle() {
    this.todoService.addTodo(this.todo);
    this.recycleService.deleteTodo(this.todo);
  }

  onDelete() {
    if (this.recycleMode) {
      this.recycleService.deleteTodo(this.todo);
    } else {
      this.todoService.sendToRecycle(this.todo);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
