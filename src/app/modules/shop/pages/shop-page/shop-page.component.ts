import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  head = '#stayhome';
  p = 'Save more with coupons & up to 70% off!';
  constructor() { }

  ngOnInit(): void {
  }

}
