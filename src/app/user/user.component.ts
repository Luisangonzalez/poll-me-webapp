import { Component } from '@angular/core';

import * as _ from 'lodash';

import { UserService, User } from '../core/user';

@Component({
  selector: 'pm-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

  public user: User;

  constructor (
    private userService: UserService
  ) {
    userService.currentUser.subscribe((u) => this.user = u);
  }
}
