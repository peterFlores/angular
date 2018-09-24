import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  name: string;
  nameOld: string;
  users: string[] = ['pedro', 'maria', 'juan'];
  activated: boolean = false;

  deleteUser(user) {
    for (let index = 0; index < this.users.length; index++) {
      if (user === this.users[index]) {
        this.users.splice(index, 1);
      }
    }
  }

  addUser(newUser) {
    this.users.push(newUser.value);
    newUser.value = null;
    newUser.focus();
    return false;
  }

  selectUser(user) {
    this.name = user;
    this.nameOld = user;
    this.activated = true;
  }

  updateUser() {
    for (let index = 0; index < this.users.length; index++) {
      if (this.nameOld === this.users[index]) {
        this.users[index] = this.name;
        this.name = null;
        this.nameOld = null;
        this.activated = false;
      }
    }
  }
}
