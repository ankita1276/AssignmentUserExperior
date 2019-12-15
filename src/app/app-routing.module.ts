import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LanguagedetailsComponent } from './languagedetails/languagedetails.component';
import { CurrencydetailsComponent } from './currencydetails/currencydetails.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {path:'home', component: HomeComponent},
  {path:'language', component: LanguagedetailsComponent},
  {path:'currency', component: CurrencydetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
