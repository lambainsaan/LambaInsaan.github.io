import { Component, OnInit } from '@angular/core';
import { faGithub, faAngellist, faTwitter, faYoutube, faLinkedin, faInstagram, faBitcoin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  faAngellist = faAngellist;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faBitcoin = faBitcoin;
  blogMdFile = 'assets/test.md';

  colors: Array<string> = [
    '#1a1a2e',
    '#16213e',
    '#439821',
    '#87431d',
    '#431241',
    '#290001',
    '#7d0633'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
