import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
// FormsModule
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('bar') bar!: ElementRef;
  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('close') close!: ElementRef;
  counter:number = 0;
  constructor(private router: Router, private dataService: DataService) {}

  // counter items
  ngOnInit(): void {
    this.dataService.getProducts()
    .subscribe(res=>{
      // this.counter = res.length
      var count = 0;
      res.forEach((e:any) => {
        count += e.quantity
      });
      return this.counter = count
    })
  }
  // Menu toggle
  openMenu() {
    if (this.bar) {
        this.nav.nativeElement.classList.add("active");
    }
  }
  closeMenu(event: any) {
    if (this.close) {
        this.nav.nativeElement.classList.remove("active");
    }
    event.preventDefault();
  }
  // Nav Title
  MainMenus: any[] = [
    {
      href: '/home',
      title: 'Home',
      icon: 'fas fa-home',
    },
    {
      href: '/shop',
      title: 'Shop',
      icon: 'fas fa-shopping-cart',
    },
    {
      href: '/blog',
      title: 'Blog',
      icon: 'fas fa-blog',
    },
    {
      href: '/about',
      title: 'About',
      icon: 'fas fa-address-card',
    },
    {
      href: '/contact',
      title: 'Contact',
      icon: 'fas fa-address-book',
    },
    {
      href: '/cart',
      cart: 'fas fa-shopping-bag',
      id: 'cart-bag',
    },
  ]
}
