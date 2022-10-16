import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  pro1!:boolean;
  pro2!:boolean;
  prod1!:boolean;
  prod2!:boolean;
  titleProd!:any;
  priceProd!:any;
  imgSrc!:any;

  constructor() {}

  ngOnInit(): void {
  }
}
