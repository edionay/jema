import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointment', component: AppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
