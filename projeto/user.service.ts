// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: string = '';

  setCurrentUser(user: string): void {
    this.currentUser = user;
  }

  getCurrentUser(): string {
    return this.currentUser;
  }
}
