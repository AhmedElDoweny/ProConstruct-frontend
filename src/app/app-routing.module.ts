import {NgModule} from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/core/home/home.component';
import {ErrorComponent} from './components/core/error/error.component';
import {LoginRegisterComponent} from './components/auth/login-register/login-register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from './auth/auth.guard';
import {AboutUsComponent} from './components/core/about-us/about-us.component';
import {ContactUsComponent} from './components/core/contact-us/contact-us.component';
import {PostListComponent} from './components/features/post/post-list/post-list.component';
import {PostDetailsComponent} from './components/features/post/post-details/post-details.component';
import {CartComponent} from './components/features/cart/cart.component';
import {NotificationComponent} from './components/features/notification/notification.component';
import {PostAddComponent} from './components/features/post/post-add/post-add.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {ForgetPwComponent} from './components/auth/forget-pw/forget-pw.component';
import {ResetPwComponent} from './components/auth/reset-pw/reset-pw.component';
import {MypostsComponent} from './components/features/post/myposts/myposts.component';
import {DashboardComponent} from './components/dashboard/dashboard/dashboard.component';
import {ListUsersComponent} from './components/dashboard/list-users/list-users.component';
import {PostsComponent} from './components/dashboard/posts/posts.component';
import {SettingComponent} from './components/dashboard/setting/setting.component'

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'add-post', component: PostAddComponent, canActivate: [AuthGuard]},
  {path: 'my-posts', component: MypostsComponent, canActivate: [AuthGuard]},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'notification', component: NotificationComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginRegisterComponent},
  {path: 'register', component: LoginRegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/edit', component: EditProfileComponent},
  {path: 'forget', component: ForgetPwComponent},
  {path: 'reset/:token', component: ResetPwComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard], children:[
    {path: 'listUsers', component:ListUsersComponent},
    {path: 'posts', component:PostsComponent},
    {path: 'setting', component:SettingComponent}
  ]},
  // Put ur routes above |⬆|
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
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
