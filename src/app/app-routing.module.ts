import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { SingleItemComponent } from './pages/single-item/single-item.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dept/:dept_name', component: HomeComponent },
  { path: 'product/:product_id', component: SingleItemComponent },
  { path: '',   redirectTo: '/dept/regional', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }