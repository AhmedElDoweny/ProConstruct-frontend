import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/core/home/home.component';
import {ErrorComponent} from './components/core/error/error.component';
import {AboutUsComponent} from './components/core/about-us/about-us.component';
import {ContactUsComponent} from './components/core/contact-us/contact-us.component';
import { PostListComponent } from './components/features/post/post-list/post-list.component';
import { PostDetailsComponent } from './components/features/post/post-details/post-details.component';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  // Put ur routes below above |⬆|
  {path: '', component: HomeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
