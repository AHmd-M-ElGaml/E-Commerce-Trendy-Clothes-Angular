import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';


const routes: Routes = [
  {
    path: '',
    component: ShopPageComponent
  },
  {
    path: 'product-details',
    component: SingleProductComponent
  },
];

@NgModule({
  declarations: [
    ShopPageComponent,
    ShopHeaderComponent,
    SingleProductComponent,
    DetailsProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class ShopModule { }
