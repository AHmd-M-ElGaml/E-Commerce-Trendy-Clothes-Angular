import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  head = "#cart";
  p = 'Add your coupon code & SAVE up to 70%!';
  constructor(private router: Router, private dataService: DataService) {
    // router to empty page if don't have any items
    if (this.dataService.cartItemList.length == 0) {
      this.router.navigate(['cart/empty-cart']);
    }
  }

  ngOnInit(): void {
  }

}
