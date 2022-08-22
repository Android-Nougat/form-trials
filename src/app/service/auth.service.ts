import { Injectable } from "@angular/core";

import { UInterface } from "../interface";

@Injectable()
export class AuthService {
  currentUser: UInterface;
  loginService(userName: string, password: string) {
    this.currentUser.userName = userName;
    this.currentUser.lastName = "Riddle";
    this.currentUser.firstName = "Tom";

    console.log(this.currentUser);
  }

  isLoggedIn() {
    return !!this.currentUser;
  }
}
