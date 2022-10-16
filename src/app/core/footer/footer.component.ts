import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  constructor() { }

  // Details
  details: any[] = [
    {
      head: 'Address: ',
      date: ' 562 Wellington Road, Street 32, san Francisco',
    },
    {
      head: 'Phone: ',
      date: ' +01 2222 365/(+91) 01 2345 6789',
    },
    {
      head: 'Hours: ',
      date: ' 10:00 - 18:00, Mon - Sat',
    },
  ]

  // Icons
  icons: any[] = [
    {
      cls: 'fab fa-facebook-f',
    },
    {
      cls: 'fab fa-twitter',
    },
    {
      cls: 'fab fa-instagram',
    },
    {
      cls: 'fab fa-pinterest-p',
    },
    {
      cls: 'fab fa-youtube',
    },
  ]
}
