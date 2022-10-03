import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonProps, IconProps } from '../card-container/card-container.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() heading: string = "Card Heading";
  @Input() content: string = "Card content";
  @Input() buttons?: ButtonProps[] = [{
    content: 'testing',
    routeTo: ['test']
  }];
  @Input() icons?: IconProps[] = [];
  @Input() image?: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  routeTo(path: string[]) {
    this.router.navigate(path)
  }
}
