import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  head = "#let's_talk";
  p = 'LEAVE A MESSAGE.We love to hear from you!';
  constructor() { }

  ngOnInit(): void {
  }

}
