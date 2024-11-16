import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';


export const routes: Routes = [
    { path: "", redirectTo: "ecommerce", pathMatch: "full"},
    { path: "ecommerce", component: EcommerceComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutes {}
