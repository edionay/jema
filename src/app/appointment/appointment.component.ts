import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.css"]
})
export class AppointmentComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  currentUser: any = {
    name: "",
    schedule: {
      day: "",
      date: "",
      time: ""
    }
  };

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
    if (this.currentUser == "") {
      this.router.navigate(["/login"]);
    }
  }
}
