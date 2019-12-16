import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencydetailsComponent } from './currencydetails.component';



const routes: Routes = [
  {
    path: '',
    component: CurrencydetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
