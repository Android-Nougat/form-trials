import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-component",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  login(value) {
    console.log(value);
  }
}
