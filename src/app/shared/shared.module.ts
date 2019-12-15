import { NgModule } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {  RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
    HeaderComponent,
    
  ],
  providers: [],
})

export class SharedModule {}
