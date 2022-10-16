import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { CartTotalsComponent } from './components/cart-totals/cart-totals.component';
import { FormsModule } from '@angular/forms';
import { EmptyCartComponent } from './pages/empty-cart/empty-cart.component';
const routes: Routes = [
  {
    path: '',
    component: CartPageComponent,
  },
  { path: 'cart/empty-cart', component: EmptyCartComponent },
];

@NgModule({
  declarations: [
    CartPageComponent,
    CartTableComponent,
    CartTotalsComponent,
    EmptyCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ]
})
export class CartModule { }
