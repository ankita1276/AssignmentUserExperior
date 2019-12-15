import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurrencydetailsComponent } from './currencydetails/currencydetails.component';
import { LanguagedetailsComponent } from './languagedetails/languagedetails.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrencydetailsComponent,
    LanguagedetailsComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
