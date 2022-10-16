import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.scss']
})
export class MapDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contacts: any[] = [
    {
      icon: 'fas fa-map',
      detail: '562 Wellington Road, Street 32, san Francisco',
    },
    {
      icon: 'fas fa-envelope',
      detail: 'contact@example.com',
    },
    {
      icon: 'fas fa-phone-alt',
      detail: '+01 2222 365/(+91) 01 2345 6789',
    },
    {
      icon: 'fas fa-clock',
      detail: 'Monday to Saturday: 10.00am to 6.00pm',
    },

  ]
}
