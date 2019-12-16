import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LanguagedetailsComponent } from './languagedetails/languagedetails.component';
import { CurrencydetailsComponent } from './currencydetails/currencydetails.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'language',
    loadChildren: () => import('./languagedetails/language.module').then(m => m.LanguageModule)
  },

  {
    path: 'currency',
    loadChildren: () => import('./currencydetails/currencydetails.module').then(m => m.CurrencyModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
