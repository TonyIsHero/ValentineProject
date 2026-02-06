import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChocodayComponent } from './chocoday/chocoday.component';
import { HugdayComponent } from './hugday/hugday.component';
import { KissdayComponent } from './kissday/kissday.component';
import { ProposedayComponent } from './proposeday/proposeday.component';
import { RosedayComponent } from './roseday/roseday.component';
import { TeddydayComponent } from './teddyday/teddyday.component';
import { ValDayComponent } from './val-day/val-day.component';
import { PromiseComponent } from './promise/promise.component';
import { dayUnlockGuard } from './day-unlock.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children: [
      { path: 'choco', component: ChocodayComponent, canActivate: [dayUnlockGuard], data: { dayKey: 'choco' } },
      { path: 'hug', component: HugdayComponent, canActivate: [dayUnlockGuard], data: { dayKey: 'hug' } },
      { path: 'kiss', component: KissdayComponent, canActivate: [dayUnlockGuard], data: { dayKey: 'kiss' } },
      { path: 'propose', component: ProposedayComponent, canActivate: [dayUnlockGuard], data: { dayKey: 'propose' } },
      { path: 'rose', component: RosedayComponent, canActivate: [dayUnlockGuard], data: { dayKey: 'rose' } },
      { path: 'teddy', component: TeddydayComponent, canActivate: [dayUnlockGuard], data: { dayKey: 'teddy' } },
      { path: 'val', component: ValDayComponent, canActivate: [dayUnlockGuard], data: { dayKey: 'val' } },
      { path: 'prom', component: PromiseComponent, canActivate: [dayUnlockGuard], data: { dayKey: 'prom' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
