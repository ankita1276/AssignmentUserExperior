import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencydetailsComponent } from './currencydetails.component';
import { CurrencyRoutingModule } from './currencydetails.routing.module';




@NgModule({
  declarations: [
    CurrencydetailsComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule
  ]
})
export class CurrencyModule { }
