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
import { CartComponent } from './components/features/cart/cart.component';
import { CompletedComponent } from './components/features/cart/completed/completed.component';
import { PendingComponent } from './components/features/cart/pending/pending.component';
import { RejectedComponent } from './components/features/cart/rejected/rejected.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { FooterUpperComponent } from './components/core/footer/footer-upper/footer-upper.component';
import { FooterMiddelComponent } from './components/core/footer/footer-middel/footer-middel.component';
import { FooterLowerComponent } from './components/core/footer/footer-lower/footer-lower.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AboutUsComponent,
    ContactUsComponent,
    CartComponent,
    CompletedComponent,
    PendingComponent,
    RejectedComponent
    FooterComponent,
    FooterUpperComponent,
    FooterMiddelComponent,
    FooterLowerComponent
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
