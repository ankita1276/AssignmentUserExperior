import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagedetailsComponent } from './languagedetails.component';


const routes: Routes = [
  {
    path: '',
    component: LanguagedetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }
