import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages//dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { IncomingEnquariesComponent } from './pages/incoming-enquaries/incoming-enquaries.component';
import { OutgoingEnquariesComponent } from './pages/outgoing-enquaries/outgoing-enquaries.component';
import { ProductsComponent } from './pages/products/products.component';
import { MyrequestsComponent } from './pages/myrequests/myrequests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrderhistoryComponent } from './pages/orderhistory/orderhistory.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthGuard } from '../app/guard/auth.guard';
import { NoauthGuard } from '../app/guard/noauth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoauthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NoauthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'incomingenquaries', component: IncomingEnquariesComponent },
  { path: 'outgoingenquaries', component: OutgoingEnquariesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'orderhistory', component: OrderhistoryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'myrequests', component: MyrequestsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
