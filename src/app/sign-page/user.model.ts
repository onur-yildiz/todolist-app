export class User {
  constructor(public name: string,
              public email: string,
              public phoneNum: number,
              public password: string,
              public items: any[]) {}
}