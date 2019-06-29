import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user = {
    email: "",
    passcode: ""
  };

  loading = false;
  wrongCredentials: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  login(): void {
    this.loading = true;
    this.loginService.signIn(this.user).subscribe(
      loggedUser => {
        this.loading = false;
        this.loginService.setCurrentUser(loggedUser);
        this.router.navigate(["/schedule"]);
      },
      error => {
        this.loading = false;
        this.wrongCredentials = true
      }
    );
  }
}
