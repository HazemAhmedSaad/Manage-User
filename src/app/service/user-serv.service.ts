import { Injectable } from '@angular/core';
import { Iuser } from '../model/iuser';
import { userList } from '../model/userList';

@Injectable({
  providedIn: 'root'
})
export class UserServService {
  users:Iuser[] = [];
  constructor() {
    this.users = userList;
   }
   getAllUsers(){
     return this.users;
   }

   deleteUser(id:number){
     return (this.users = this.users.filter((ele) => ele.id != id));
   }


   getById(id: number) {
    return this.users.find(user => user.id === id);
  }

  addUser(user: any) {
    user.id = this.users.length + 1; // Generate new ID
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: any) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...updatedUser, id }; // Update user details
    }
  }
}
