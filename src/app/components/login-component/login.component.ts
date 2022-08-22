import { Component, OnInit } from "@angular/core";

import { AuthService } from "../../service/auth.service";

@Component({
  selector: "app-login-component",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  login(value) {
    this.authService.loginService(value.userName, value.password);
  }
}
