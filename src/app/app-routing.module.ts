import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogRendererComponent } from './blog-renderer/blog-renderer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerComponent } from "./pages/player/player.component";

const routes: Routes = [
  { path: 'player', component: PlayerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'blog',
    children: [
      {
        path: '',
        component: BlogHomeComponent
      },
      {
      path: '**',
      component: BlogRendererComponent
    }] },
    { path: '**', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
