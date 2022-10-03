import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-blog-renderer',
  templateUrl: './blog-renderer.component.html',
  styleUrls: ['./blog-renderer.component.scss']
})
export class BlogRendererComponent implements OnInit {
  public filePath: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.debug('ngOnInit Blog Renderer:', this.router)
    console.debug('ngOnInit Activated Route', this.activatedRoute.snapshot.url[0].path)
    this.filePath = '../assets/' + this.activatedRoute.snapshot.url[0].path + '.md'
  }

}
