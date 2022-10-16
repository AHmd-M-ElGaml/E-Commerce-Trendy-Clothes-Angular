import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.scss']
})
export class Banner2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bnrs: any[] = [
    {
      head: 'crazy deals',
      main: 'buy 1 get 1 free',
      p: 'The best classic dress is on sale at cara',
      btn: 'Learn More',
    },
    {
      head: 'spring/summer',
      main: 'upcomming season',
      p: 'The best classic dress is on sale at cara',
      btn: 'Collection',
      cls: 'banner-box2',
    },
  ]
}
