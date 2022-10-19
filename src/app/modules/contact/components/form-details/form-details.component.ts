import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  persons: any[] = [
    {
      // img: '../../../../../assets/img/people/1.png',
      img: 'https://i.ibb.co/wrNxgKn/1.png',
      name: 'John Doe',
    },
    {
      // img: '../../../../../assets/img/people/2.png',
      img: 'https://i.ibb.co/fnKKsJ9/2.png',
      name: 'William Smith',
    },
    {
      // img: '../../../../../assets/img/people/3.png',
      img: 'https://i.ibb.co/4RQFwTZ/3.png',
      name: 'Emma Stone',
    },
  ]

}
