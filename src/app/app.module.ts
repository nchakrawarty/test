import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { DashboardComponent } from './pages//dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { LeftmenuComponent } from './pages/common/leftmenu/leftmenu.component';
import { IncomingEnquariesComponent } from './pages/incoming-enquaries/incoming-enquaries.component';
import { OutgoingEnquariesComponent } from './pages/outgoing-enquaries/outgoing-enquaries.component';
import { ProductsComponent } from './pages/products/products.component';
import { MyrequestsComponent } from './pages/myrequests/myrequests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrderhistoryComponent } from './pages/orderhistory/orderhistory.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthGuard } from './guard/auth.guard';
import { NoauthGuard } from './guard/noauth.guard';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LeftmenuComponent,
    IncomingEnquariesComponent,
    OutgoingEnquariesComponent,
    ProductsComponent,
    MyrequestsComponent,
    ProfileComponent,
    OrderhistoryComponent,
    SettingsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,

    HttpClientModule
  ],

  providers: [
    AuthGuard,
    AuthService,
    UserService,
    NoauthGuard
  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
