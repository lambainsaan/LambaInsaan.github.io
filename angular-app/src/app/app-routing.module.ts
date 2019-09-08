import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '' } // TODO: rhitikbhatt[at]gmail[dot]com Update with the 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
