export class Todo {
  constructor(public id: string,
              public name: string,
              public description: string,
              public location: string,
              public date: Date,
              public color: string) {}
}