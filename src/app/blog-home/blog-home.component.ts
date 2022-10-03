import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../card-container/card-container.component';

function moveToBlogPage(router: Router, blogIdentifier: string) {
  router.navigate([blogIdentifier]);
}

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {
  cards: Card[] = [{
    content: 'This is testing',
    heading: 'Heading 1',
    buttons: [{
      content: 'Read more',
      routeTo: ['blog', 'about']
    }]
  },
  {
    content: 'testing 2',
    heading: 'Heading 2',
    buttons: [{
      content: 'Read more',
      routeTo: ['blog', 'goals']
    }]
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
