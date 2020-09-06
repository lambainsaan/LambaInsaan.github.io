import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogComponent } from './blog/blog.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'mailing-list', component: MailingListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
