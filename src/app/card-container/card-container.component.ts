import { Component, Input, OnInit } from '@angular/core';

export enum ActionItemType {
  Button = 'button',
  Icon = 'icon'
}

export interface ButtonProps {
  content: string,
  routeTo: string[]
}

export interface IconProps {
  src: string
}

export interface Card {
  heading: string;
  content: string;
  buttons?: (ButtonProps)[],
  icons?: (IconProps)[]
}

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  @Input() cards: Card[] = [{
    buttons: [{
      content: 'Testing',
      routeTo: ['']
    }, {
      content: 'abcd',
      routeTo: []
    }, {
      content: 'efgh',
      routeTo: ['about']
    }],
    content: 'Content abcdefgh',
    heading: 'Heading test'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
