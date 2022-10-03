import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, ActivationEnd } from '@angular/router';

export enum RoutingType {
  AngularRouting,
  Markdown
}


export enum RootUrl {
  about = "about",
  blog = "blog",
  newsletter = "newsletter",
  podcast = "podcast",
  goals = "goals"
}

export type Route = { type: RoutingType; route: string; }
class NavbarItem {
  constructor(public title: String, public enabled: boolean, public route: { type: RoutingType; route: string }) {
  }
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  baseFragment: string | null = null;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(
      (fragment) => {
        console.debug('fragment', fragment)
        if (fragment instanceof ActivationEnd) {
          this.baseFragment = fragment?.snapshot?.url[0]?.path
        }
      }
    )
  }


  get navItems(): NavbarItem[] {
    const routes = [['About', RootUrl.about]
    // , ['Blog', RootUrl.blog], ['Newsletter', RootUrl.newsletter ], ['Podcast', RootUrl.podcast],
    // ['Goals', RootUrl.goals]
  ];
    return routes.map(
      route => {
        return new NavbarItem(route[0], this.baseFragment === route[1], {route: route[1], type: RoutingType.AngularRouting})
      }
    )
  }

  goToPage(route: Route) {
    if (route.type === RoutingType.AngularRouting) {
      this.router.navigate([route.route]);
    }
  }


}

