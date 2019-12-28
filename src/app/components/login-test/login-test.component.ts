import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login-test",
  templateUrl: "./login-test.component.html",
  styleUrls: ["./login-test.component.css"]
})
export class LoginTestComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  doLogin() {
    this.authService.doGoogleLogin();
  }
}
