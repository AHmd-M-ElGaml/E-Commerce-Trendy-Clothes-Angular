import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent  {

  constructor() { }

  features: any[] = [
    {
      title: 'Free Shipping',
      img: '../../../../assets/img/features/f1.png',
    },
    {
      title: 'Online Order',
      img: '../../../../assets/img/features/f2.png',
    },
    {
      title: 'Save Money',
      img: '../../../../assets/img/features/f3.png',
    },
    {
      title: 'Promotions',
      img: '../../../../assets/img/features/f4.png',
    },
    {
      title: 'Happy Sell',
      img: '../../../../assets/img/features/f5.png',
    },
    {
      title: 'F24/7 Support',
      img: '../../../../assets/img/features/f6.png',
    },
  ]

}
