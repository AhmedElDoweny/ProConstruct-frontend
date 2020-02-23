import {ClientService} from 'src/app/_service/client.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {AgmCoreModule} from '@agm/core'

import {RegisterComponent} from './components/auth/register/register.component';
import {LoginComponent} from './components/auth/login/login.component';
import {LoginRegisterComponent} from './components/auth/login-register/login-register.component';
import {ProfileComponent} from './components/profile/profile.component';
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
import { CartComponent } from './components/features/cart/cart.component';
import { CompletedComponent } from './components/features/cart/completed/completed.component';
import { PendingComponent } from './components/features/cart/pending/pending.component';
import { RejectedComponent } from './components/features/cart/rejected/rejected.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { FooterUpperComponent } from './components/core/footer/footer-upper/footer-upper.component';
import { FooterMiddelComponent } from './components/core/footer/footer-middel/footer-middel.component';
import { FooterLowerComponent } from './components/core/footer/footer-lower/footer-lower.component';
import { NotificationComponent } from './components/features/notification/notification.component';
import { PostAddComponent } from './components/features/post/post-add/post-add.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import {SocketioService} from './_service/socketio.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
    LoginComponent,
    LoginRegisterComponent,
    ProfileComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    UpperHeaderComponent,
    MiddleHeaderComponent,
    LowerHeaderComponent,
    PostListComponent,
    PostDetailsComponent,
    CartComponent,
    CompletedComponent,
    PendingComponent,
    RejectedComponent,
    FooterComponent,
    FooterUpperComponent,
    FooterMiddelComponent,
    FooterLowerComponent,
    NotificationComponent,
    PostAddComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgFlashMessagesModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB90FxtYG_ybAYXGkz0ybkmkboE2nEbezI'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ClientService,
    SocketioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
