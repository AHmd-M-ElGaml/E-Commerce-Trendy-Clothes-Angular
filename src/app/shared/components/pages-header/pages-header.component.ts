import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-header',
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.scss']
})
export class PagesHeaderComponent implements OnInit {
  @Input() head!:string;
  @Input() p!:string;
  @Input() shop!:boolean;
  @Input() blog!:boolean;
  @Input() about!:boolean;
  @Input() contact!:boolean;
  @Input() cart!:boolean;
  cls!:string;
  constructor() {

  }

  ngOnInit(): void {
    if (this.shop) {
      this.cls = "shop"
    } else if (this.blog) {
      this.cls = "blog"
    }else if (this.about) {
      this.cls = "about"
    }else if (this.contact) {
      this.cls = "contact"
    }else if (this.cart) {
      this.cls = "cart"
    }
  }


}
