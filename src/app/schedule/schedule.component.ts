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

  currentUser: any = {}

  selectedTime: any = "";

  days: any = []
  terca: {}
  quarta: {}
  quinta: {}
  sexta: {}

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser()

    this.loginService.getDays()
    .subscribe(days => {
      this.days = days;
      this.terca = days[0]
      this.quarta = days[1]
      this.quinta = days[2]
      this.sexta = days[3]
    }, error => console.log(error))

    if (this.currentUser.name === "") {
       this.router.navigate(["/login"]);
    } else if (!this.currentUser.upToVote) {
      this.router.navigate(["/appointment"]);
   }
  }

  selectTime(time) {
    this.selectedTime = time;
  }

  logoff() {
    this.loginService.setCurrentUser(null);
    this.router.navigate(["/login"]);
  }
}
