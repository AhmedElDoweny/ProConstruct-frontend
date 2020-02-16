import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HomeComponent} from './components/core/home/home.component';
import {ErrorComponent} from './components/core/error/error.component';
import { AboutUsComponent } from './components/core/about-us/about-us.component';
import { ContactUsComponent } from './components/core/contact-us/contact-us.component';
import { HeaderComponent } from './components/core/header/header/header.component';
import { UpperHeaderComponent } from './components/core/header/upper-header/upper-header.component';
import { MiddleHeaderComponent } from './components/core/header/middle-header/middle-header.component';
import { LowerHeaderComponent } from './components/core/header/lower-header/lower-header.component';
import { PostListComponent } from './components/features/post/post-list/post-list.component';
import { PostDetailsComponent } from './components/features/post/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    UpperHeaderComponent,
    MiddleHeaderComponent,
    LowerHeaderComponent,
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
