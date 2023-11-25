// user.component.ts
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <h2>User Component</h2>
      <p>Current User: {{ currentUser }}</p>
    </div>
  `,
})
export class UserComponent {
  currentUser: string;

  constructor(private userService: UserService) {
    this.currentUser = this.userService.getCurrentUser();
  }
}
