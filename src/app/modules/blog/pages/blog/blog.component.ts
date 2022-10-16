import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  head = '#readmore';
  p = 'Read all case studies about our products!';

  constructor() { }

  ngOnInit(): void {
  }

}
