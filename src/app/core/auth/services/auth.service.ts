import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  userType:string | undefined; // 'student' or 'teacher'

  login(userType: string) {
    this.isLoggedIn = true;
    this.userType = userType;
  }

  logout() {
    this.isLoggedIn = false;
    this.userType = '';
  }
}
