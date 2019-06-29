import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  currentUser: any = {};

  selectedTime: any = "";

  days: any = [];
  terca: {};
  quarta: {};
  quinta: {};
  sexta: {};

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();

    this.loginService.getDays().subscribe(
      days => {
        this.days = days;
        this.terca = days[0];
        this.quarta = days[1];
        this.quinta = days[2];
        this.sexta = days[3];
      },
      error => console.log(error)
    );

    if (this.currentUser.name === "") {
      this.router.navigate(["/login"]);
    } else if (!this.currentUser.upToVote) {
      this.router.navigate(["/appointment"]);
    }
  }

  consoleSelectedTime() {
    console.log(this.selectedTime);
  }

  selectTime(day, time) {
    this.selectedTime = time;
    this.selectedTime.day = day.label;
    this.selectedTime.date = day.date;
    this.selectedTime.dayId = day._id;
  }

  logoff() {
    this.loginService.setCurrentUser(null);
    this.router.navigate(["/login"]);
  }

  schedule() {
    this.loginService
      .schedule(this.currentUser, this.selectedTime)
      .subscribe(
        response => {
          this.loginService.setCurrentUser(response)
          this.router.navigate(["/appointment"]);

        },
        error => console.log(error)
      );
  }
}
