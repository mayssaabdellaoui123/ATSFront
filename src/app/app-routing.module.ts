import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path :'products',
    component : ProductsComponent } ,
  {
    path :'/products/:id',
    component : ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
