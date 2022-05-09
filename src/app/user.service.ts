import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: User[] = [{
  
    id:1,
    name:"memories of midnight",
    category:"fiction",
    author:'james clark'
  },
  {
    id:2,
    name:"the avalanche",
    category:"fiction",
    author:'william donald'
  },
  {
    id:3,
    name:"husky stories",
    category:"fiction",
    author:'emma watson'
  },
  {
    id:4,
    name:"the science of everything",
    category:"science",
    author:'dr.phill'
  }
];

  constructor() { }
  getUsers() {
    return this.userList
}
}
