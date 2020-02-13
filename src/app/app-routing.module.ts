import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/core/home/home.component';
import {ErrorComponent} from './components/core/error/error.component';
import {LoginRegisterComponent} from './components/auth/login-register/login-register.component'

const routes: Routes = [

  // Put ur routes below above |⬆|
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginRegisterComponent},
  {path: 'register', component: LoginRegisterComponent},
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
