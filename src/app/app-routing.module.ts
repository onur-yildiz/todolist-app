import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { TodoDetailComponent } from "./todos/todo-detail/todo-detail.component";
import { TodoEditComponent } from "./todos/todo-edit/todo-edit.component";
import { TodoStartComponent } from "./todos/todo-start/todo-start.component";
import { RecycleListComponent } from "./recycle-list/recycle-list.component";
import { TodosComponent } from "./todos/todos.component";
import { SignPageComponent } from "./sign-page/sign-page.component";
import { SignInComponent } from "./sign-page/sign-in/sign-in.component";
import { SignUpComponent } from "./sign-page/sign-up/sign-up.component";
import { LoginErrorComponent } from "./sign-page/login-error/login-error.component";
import { UserProfileComponent } from "./sign-page/user-profile/user-profile.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'todos', component: TodosComponent ,
  children: [
    { path: '', component: TodoStartComponent },
    { path: 'new', component: TodoEditComponent },
    { path: ':id', component: TodoDetailComponent },
    { path: ':id/edit', component: TodoEditComponent },
  ]},
  { path: 'recycle-bin', component: RecycleListComponent,
  children: [
    { path: ':id', component: TodoDetailComponent }
  ]},
  { path: 'user', component: SignPageComponent,
  children: [
    { path: 'login', component: SignInComponent },
    { path: 'register', component: SignUpComponent },
    { path: 'login-error', component: LoginErrorComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: '**', redirectTo: '/' },
  ]},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}