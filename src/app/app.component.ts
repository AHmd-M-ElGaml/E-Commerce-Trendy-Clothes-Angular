import { Component } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-Commerce-Trendy-Clothes';
  constructor(private router: Router, private contexts: ChildrenOutletContexts) {
    // window.location.reload.call(window.scrollTo({top: 0, behavior: 'smooth'}));
  }

  ngOnInit() {
    // scroll to top
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo({top: 0, behavior: 'smooth'})
    });
  }

  // ngAfterViewInit(): void {
  //   // Scroll to top when reload
  //   window.onbeforeunload = function() {window.scrollTo({top: 0, behavior: 'smooth'});}
  // }
}
