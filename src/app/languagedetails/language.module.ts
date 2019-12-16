import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageRoutingModule } from './language.routing.module';
import { LanguagedetailsComponent } from './languagedetails.component';



@NgModule({
  declarations: [
    LanguagedetailsComponent
  ],
  imports: [
    CommonModule,
    LanguageRoutingModule
  ]
})
export class LanguageModule { }
