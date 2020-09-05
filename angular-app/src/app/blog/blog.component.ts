import { Component, OnInit } from '@angular/core';
import { NumberedCodeblockModule } from '@ctrl/ngx-numbered-codeblock';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  timestamp: string;
  titleChars = 'Degree or Pedigree? 🐶';
  code = `
    let a: string = 3;
  `;

  colors: Array<string> = [
    '#1a1a2e',
    '#16213e',
    '#439821',
    '#87431d',
    '#431241',
    '#290001',
    '#7d0633'
  ];
  // demoPython = require('raw-loader!./demo.py').default;

  constructor() {
    this.timestamp = '2020-08-01 18:24';
  }

  get titleCharsArr(): Array<{
    char: string,
    color: string
  }> {
    let returnedArr: Array<{
      char: string,
      color: string
    }> = [];
    for (let i = 0; i < this.titleChars.length; i++) {
      returnedArr = returnedArr.concat({
        char: this.titleChars.charAt(i),
        color: this.colors[Math.floor(this.colors.length * Math.random())]
      });
    }
    return returnedArr;
  }



  ngOnInit() {
  }

}
