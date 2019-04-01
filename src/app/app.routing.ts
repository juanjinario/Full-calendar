import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularCalendarComponent } from './angular-calendar/angular-calendar.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';

const routes: Routes = [
    { path: 'angular-calendar', component: AngularCalendarComponent },
    { path: 'full-calendar', component: FullCalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
