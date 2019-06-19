import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MineComponent } from './mine/mine.component';
import { HomeComponent} from './home/home.component';
import { BuyComponent} from './buy/buy.component';

const routes: Routes = [
  {path: 'mine', component: MineComponent},
  {path: 'buy', component: BuyComponent},
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
