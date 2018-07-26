import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoDetailComponent } from './todos/todo-detail/todo-detail.component';
import { TodoItemComponent } from './todos/todo-list/todo-item/todo-item.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { RecycleListComponent } from './recycle-list/recycle-list.component';
import { HeaderComponent } from './header/header.component';
import { TodoStartComponent } from './todos/todo-start/todo-start.component';
import { AppRoutingModule } from './app-routing.module';
import { ShortenPipe } from './shared/shorten.pipe';
import { SearchPipe } from './shared/search.pipe';
import { PagerPipe } from './shared/pager.pipe';
import { SortPipe } from './shared/sort.pipe';
import { SignPageComponent } from './sign-page/sign-page.component';
import { SignInComponent } from './sign-page/sign-in/sign-in.component';
import { SignUpComponent } from './sign-page/sign-up/sign-up.component';
import { LoginErrorComponent } from './sign-page/login-error/login-error.component';
import { UserProfileComponent } from './sign-page/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoItemComponent,
    TodoEditComponent,
    RecycleListComponent,
    HeaderComponent,
    TodoStartComponent,
    ShortenPipe,
    SearchPipe,
    PagerPipe,
    SortPipe,
    SignPageComponent,
    SignInComponent,
    SignUpComponent,
    LoginErrorComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
