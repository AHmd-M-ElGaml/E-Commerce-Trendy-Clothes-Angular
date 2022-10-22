import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DetailsProductComponent } from './../../../modules/shop/components/details-product/details-product.component';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component {
  @ViewChildren('add') add!: QueryList<any>;
  @Input() public setStorage!: DetailsProductComponent;
  @Input() pro1!:boolean;
  @Input() pro2!:boolean;
  titleProd!:any;
  priceProd!:any;
  imgSrc!:any;
  quantity!: any;
  constructor(private router: Router, private dataService: DataService) {
  }
  // Show Cart Icon
  showAdd(event: any) {
    var addProd = event.target;
    this.add.forEach((items:any) => {
      items.nativeElement.classList.remove("hidden");
      items.nativeElement.nextSibling.classList.add("hidden");
      items.nativeElement.nextSibling.classList.remove("flex");
    });
    addProd.classList.add("hidden");
    addProd.nextSibling.classList.remove("hidden")
    addProd.nextSibling.classList.add("flex")
  }
  // Add Products to Cart
  addProduct(event: any) {
    // window.localStorage.setItem("Product Title", this.titleProd);
    // window.localStorage.setItem("Product Price", this.priceProd);
    // window.localStorage.setItem("Product Img", this.imgSrc);
    var add = event.target;
    var shopProd = add.parentElement.parentElement.parentElement;
    this.imgSrc = shopProd.firstChild.src;
    this.titleProd = shopProd.firstChild.nextSibling.firstChild.nextSibling.innerText;
    this.priceProd = shopProd.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.innerText;
    this.quantity = shopProd.lastChild.firstChild.firstChild.nextSibling.value;
    console.log(this.quantity)
    var product : any = {
      title: this.titleProd,
      price: this.priceProd,
      img: this.imgSrc,
      quantity: this.quantity,
      total: parseFloat(this.priceProd.replace("$", "")) * this.quantity,
    }
    // Delete Old same Product.
    for (let i = 0; i < this.dataService.cartItemList.length; i++) {
      if (product.title == this.dataService.cartItemList[i].title) {
        this.dataService.removeCartItem(product);
      }
    }
    // Add to Cart
    this.dataService.addCart(product);
    // screen to top
    // window.scrollTo({top: 0, behavior: 'smooth'})
  }
// Products
  products1: any[] = [
    {
      id: 1,
      // img: '../../../../assets/img/products/f1.jpg',
      img: 'https://i.ibb.co/hfqFFX1/f1.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0f1',
      price: '70',
    },
    {
      id: 2,
      // img: '../../../../assets/img/products/f2.jpg',
      img: 'https://i.ibb.co/ygcVds6/f2.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0f2',
      price: '70',
    },
    {
      id: 3,
      // img: '../../../../assets/img/products/f3.jpg',
      img: 'https://i.ibb.co/WK6KjK9/f3.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0f3',
      price: '70',
    },
    {
      id: 4,
      // img: '../../../../assets/img/products/f4.jpg',
      img: 'https://i.ibb.co/w7FnN39/f4.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0f4',
      price: '70',
    },
    {
      id: 5,
      // img: '../../../../assets/img/products/f5.jpg',
      img: 'https://i.ibb.co/WvRGDwR/f5.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0f5',
      price: '70',
    },
    {
      id: 6,
      // img: '../../../../assets/img/products/f6.jpg',
      img: 'https://i.ibb.co/qFyRTj1/f6.jpg',
      mark: 'adidas',
      title: 'T-Shirts & Shirts 0f6',
      price: '120',
    },
    {
      id: 7,
      // img: '../../../../assets/img/products/f7.jpg',
      img: 'https://i.ibb.co/SKzVh91/f7.jpg',
      mark: 'adidas',
      title: 'Cartoon Trouser 0f7',
      price: '80',
    },
    {
      id: 8,
      // img: '../../../../assets/img/products/f8.jpg',
      img: 'https://i.ibb.co/WWm4hty/f8.jpg',
      mark: 'adidas',
      title: 'Cartoon clothes 0f8',
      price: '60',
    },
  ]
  products2: any[] = [
    {
      id: 9,
      // img: '../../../../assets/img/products/n1.jpg',
      img: 'https://i.ibb.co/2cthGwR/n1.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0N1',
      price: '75',
    },
    {
      id: 10,
      // img: '../../../../assets/img/products/n2.jpg',
      img: 'https://i.ibb.co/jw9pDNJ/n2.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0N2',
      price: '75',
    },
    {
      id: 11,
      // img: '../../../../assets/img/products/n3.jpg',
      img: 'https://i.ibb.co/NNKHTfC/n3.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0N3',
      price: '75',
    },
    {
      id: 12,
      // img: '../../../../assets/img/products/n4.jpg',
      img: 'https://i.ibb.co/gSNZpM5/n4.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0N4',
      price: '70',
    },
    {
      id: 13,
      // img: '../../../../assets/img/products/n5.jpg',
      img: 'https://i.ibb.co/QHzs6jk/n5.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0N5',
      price: '75',
    },
    {
      id: 14,
      // img: '../../../../assets/img/products/n6.jpg',
      img: 'https://i.ibb.co/ZKBbCDw/n6.jpg',
      mark: 'adidas',
      title: 'Cartoon Shorts 0N6',
      price: '85',
    },
    {
      id: 15,
      // img: '../../../../assets/img/products/n7.jpg',
      img: 'https://i.ibb.co/55zznvg/n7.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0N7',
      price: '80',
    },
    {
      id: 16,
      // img: '../../../../assets/img/products/n8.jpg',
      img: 'https://i.ibb.co/nP6ZX25/n8.jpg',
      mark: 'adidas',
      title: 'Cartoon T-Shirts 0N8',
      price: '72',
    },
  ]

// Loop Stars
  starLoop(n: number): Array<number> {
    return Array(n);
  }
}


