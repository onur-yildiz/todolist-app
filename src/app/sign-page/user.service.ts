import { Injectable } from "../../../node_modules/@angular/core";
import { User } from "./user.model";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { TodoService } from "../todos/todo.service";
import { Subject } from "../../../node_modules/rxjs";
import { Todo } from "../todos/todos.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userAction = new Subject<any>();
  users: User[] = [
    new User('t', 't@t', 55, 't', [
      new Todo('bjuu', 'LAN Party', 'otikajerjobehpafuniimakavsizafutriutovivatcijgomwe', 'Azloban 1398 Uvumo Ridge', new Date(2019, 1, 10,), 'lightpink'),
      new Todo('ruu2', 'Job Meeting', 'erowbohakofoditasrulpuwfozerfolleveusmirgozgepufam', 'Mujfavdu 851 Naku Junction', new Date(2019, 2, 16), 'lightblue'),
      new Todo('a4byr', 'Guitar Course', 'wughewehzicgujfiwektudapvanlisdincaccezegasafaisul', 'Uzatali 476 Cecjuk Ridge', new Date(2019, 4, 9), 'orange'),
      new Todo('a4byrn', 'Meeting', 'nufmipamfisomapcecufihumukiotirossawatusisiplidfug', 'Abumowo 1801 Waji Manor', new Date(2019, 4, 9), 'red'),
      new Todo('a4byrb', 'Job to do', 'lemnanikimconazabicbodealgeupgebabipubuwosalkiihih', 'Enwuci 1145 Ahsa Key', new Date(2019, 4, 9), 'orange'),
      new Todo('a4byrd', 'Dinner', 'inhokpocarcagfoivucavlonguksepdaabulanomjewpiwefaj', 'Webaoga 459 Reuwe Path', new Date(2019, 4, 9), 'lightblue'),
      new Todo('a4byrw', 'Movie Night', 'pihtisnezikefumdufagudgallubeukkapramcupuwopopiiku', 'Tetzugih 1674 Tajfit Terrace', new Date(2019, 4, 9), 'red'),
      new Todo('a4byrq', 'Take out trash', 'receokdudepdockellanvarazokusejdeslelogasojpemcoti', 'Lokonse 1211 Ezwop Center', new Date(2019, 4, 9), 'orange'),
    ])
  ];
  activeUser= ''; //email

  constructor(private route: ActivatedRoute,
              private router: Router,
              private todoService: TodoService) {}

  signup(newUser: User) {
    newUser.items = [];
    this.users.push(newUser);
    console.log(newUser);
  }

  signin(loginUser: User) {
    for(const user of this.users) {
      if ( user.email === loginUser.email && user.password === loginUser.password) {
        this.activeUser = loginUser.email;
        this.userAction.next(null);
        this.loadItems();
        this.router.navigate(['/']);
        console.log('LOGIN SUCCESSFUL');
        return null;
      }
    }
    this.router.navigate(['/user/login-error']);
    console.log('LOGIN FAILED');
    return null;
  }

  findUserIndex() {
    return this.users.findIndex(user => user.email === this.activeUser);
  }

  getUserInfo() {
    this.signCheck();
    let index = this.findUserIndex();
    return this.users[index];
  }

  deleteUser() {
    this.signCheck();
    let index = this.findUserIndex();
    this.users.splice(index, 1);
    this.logout();
  }

  logout() {
    this.todoService.eraseAll();
    this.activeUser = '';
    this.userAction.next(null);
  }

  signCheck() {
    if (this.activeUser) {
      return true;
    } else {
      this.router.navigate(['/user/login']);
    return false;
    }
  }
  
  updateItems(todos: Todo[]) {
    let todosSafe = todos;
    let index = this.findUserIndex();
    this.users[index].items.push(...todosSafe);
  }

  loadItems() {
    if (this.activeUser != '') {
      this.todoService.eraseAll();
      let index = this.findUserIndex();
      for (const item of this.users[index].items) {
        if (item) {
          this.todoService.addTodo(item);
        }
      }
    }
  }
  
}