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
      img: 'https://i.ibb.co/Pj0YR9v/f1.png',
      // img: '../../../../assets/img/features/f1.png',
    },
    {
      title: 'Online Order',
      img: 'https://i.ibb.co/zGNTmVB/f2.png',
      // img: '../../../../assets/img/features/f2.png',
    },
    {
      title: 'Save Money',
      img: 'https://i.ibb.co/9wZPK1d/f3.png',
      // img: '../../../../assets/img/features/f3.png',
    },
    {
      title: 'Promotions',
      img: 'https://i.ibb.co/qNghtGq/f4.png',
      // img: '../../../../assets/img/features/f4.png',
    },
    {
      title: 'Happy Sell',
      img: 'https://i.ibb.co/MGd16D6/f5.png',
      // img: '../../../../assets/img/features/f5.png',
    },
    {
      title: 'F24/7 Support',
      img: 'https://i.ibb.co/RcDLfGB/f6.png',
      // img: '../../../../assets/img/features/f6.png',
    },
  ]

}
