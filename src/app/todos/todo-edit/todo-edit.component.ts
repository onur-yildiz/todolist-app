import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdService } from '../../shared/id.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  id: string;
  editMode = false;
  todosForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private todoService: TodoService,
              private idService: IdService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = (params['id'] != null);
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.todoService.updateTodo(this.id, this.todosForm.value);
    } else {
      this.todoService.addTodo(this.todosForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  initForm() {
    let id = this.idService.generateId();
    let name = null;
    let location = null;
    let date = new Date();
    let description = null;
    let color = 'lightpink';
    
    if (this.editMode) {
      let todo = this.todoService.getTodo(this.id);
      id = todo.id;
      name = todo.name;
      location = todo.location;
      date = todo.date;
      description = todo.description;
      color = todo.color;
    } else { console.log('ID Generated: ' + id); }
    this.todosForm = new FormGroup({
      'id': new FormControl(id, Validators.required),
      'name': new FormControl(name, Validators.required),
      'location': new FormControl(location),
      'date': new FormControl(date, Validators.required),
      'description': new FormControl(description),
      'color': new FormControl(color, Validators.required),
    });
  }

}
