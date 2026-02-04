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

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children: [
      { path: 'choco', component: ChocodayComponent },
      { path: 'hug', component: HugdayComponent },
      { path: 'kiss', component: KissdayComponent },
      { path: 'propose', component: ProposedayComponent },
      { path: 'rose', component: RosedayComponent },
      { path: 'teddy', component: TeddydayComponent },
      { path: 'val', component: ValDayComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
