import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PodcastComponent } from './podcast/podcast.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { BlogRendererComponent } from './blog-renderer/blog-renderer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { PlayerComponent } from './pages/player/player.component';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
  const linkRenderer = renderer.link;

  renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a role="link" tabindex="0" target="_blank" rel="nofollow noopener noreferrer" ');
  };

  return {
    renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NewsletterComponent,
    PodcastComponent,
    BlogComponent,
    BlogHomeComponent,
    CardComponent,
    SidebarComponent,
    CardContainerComponent,
    BlogRendererComponent,
    PageNotFoundComponent,
    PlayerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory
      }
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    // {
    //   provide: DARK_MODE_OPTIONS,
    //   useValue: {
    //     darkModeClass: 'darkTheme',
    //     lightModeClass: 'lightTheme'
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
