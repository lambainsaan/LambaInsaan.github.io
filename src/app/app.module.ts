import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MarkdownModule } from 'ngx-markdown';
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
import { MatCardModule } from '@angular/material/card';
import { CardContainerComponent } from './card-container/card-container.component';
import { BlogRendererComponent } from './blog-renderer/blog-renderer.component';
import { MatInputModule } from '@angular/material/input';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatButtonModule } from '@angular/material/button';
// import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { PlayerComponent } from './pages/player/player.component';



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
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
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
