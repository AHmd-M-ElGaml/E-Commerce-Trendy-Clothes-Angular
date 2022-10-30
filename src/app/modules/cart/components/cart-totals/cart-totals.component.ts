import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.scss']
})
export class CartTotalsComponent implements OnInit {
  public subtotal: any;
  public shipping: any;
  public total: any;
  alertMassage:boolean = false;
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
      this.subtotal = this.dataService.getTotalPrice();
      this.shipping = 10;
      this.total = this.subtotal + this.shipping;
  }
  // Checkout Proceed
  checkout() {
    if (this.dataService.cartItemList.length != 0) {
      this.alertMassage = true;
      setTimeout(() => {
        this.dataService.removeAllCart();
        this.ngOnInit();
        this.alertMassage = false;
        this.router.navigate(['cart/empty-cart']);
      }, 2000);
    }
  }
}
