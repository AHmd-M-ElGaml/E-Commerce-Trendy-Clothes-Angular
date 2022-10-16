import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-banner',
  templateUrl: './sm-banner.component.html',
  styleUrls: ['./sm-banner.component.scss']
})
export class SmBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bnrs: any[] = [
    {
      head: 'Seasonal Sale',
      p: 'Winter Collection -50% OFF',
    },
    {
      head: 'New Footwear Collection',
      p: 'Spring / Summer 2022',
      cls: 'banner-box2',
    },
    {
      head: 'T-shirts',
      p: 'New Trendy Prints',
      cls: 'banner-box3',
    },
  ]
}
