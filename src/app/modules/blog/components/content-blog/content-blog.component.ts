import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-blog',
  templateUrl: './content-blog.component.html',
  styleUrls: ['./content-blog.component.scss']
})
export class ContentBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contBlogs: any[] = [
    {
      // img: '../../../../../assets/img/blog/b1.jpg',
      img: 'https://i.ibb.co/2NfQrr9/b1.jpg',
      title: 'The Cotton-Jersey Zip-Up Hoodie',
      p: 'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...',
      read: 'Continue Reading',
      date: '13/01',
    },
    {
      // img: '../../../../../assets/img/blog/b2.jpg',
      img: 'https://i.ibb.co/2vFtjLV/b2.jpg',
      title: 'How to Style a Quiff',
      p: 'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...',
      read: 'Continue Reading',
      date: '15/02',
    },
    {
      // img: '../../../../../assets/img/blog/b3.jpg',
      img: 'https://i.ibb.co/4fz80VY/b3.jpg',
      title: 'Must-Have Skater Girl Items',
      p: 'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...',
      read: 'Continue Reading',
      date: '18/03',
    },
    {
      // img: '../../../../../assets/img/blog/b4.jpg',
      img: 'https://i.ibb.co/fFpZ7qY/b4.jpg',
      title: 'Runway-Inspired Trends',
      p: 'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...',
      read: 'Continue Reading',
      date: '10/04',
    },
    {
      // img: '../../../../../assets/img/blog/b6.jpg',
      img: 'https://i.ibb.co/YXJ6Wsn/b6.jpg',
      title: 'AW20 Menswear Trends',
      p: 'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...',
      read: 'Continue Reading',
      date: '12/05',
    },
  ]

}
