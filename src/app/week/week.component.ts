import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  weekdays: String[] = ["Segunda-feira",
                        "Terça-feira",
                        "Quarta-feira",
                        "Quinta-feira",
                        "Sexta-feira",
                        ] 

  hours: String[] = ['14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30']
}
