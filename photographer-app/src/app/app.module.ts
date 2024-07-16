import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { PortifolioComponent } from './Component/portifolio/portifolio.component';
import { BookingComponent } from './Component/booking/booking.component';
import { ReviewsComponent } from './Component/reviews/reviews.component';
import { LoginComponent } from './Component/login/login.component';
import { SearchComponent } from './Component/search/search.component';
import { RegisterComponent } from './Component/register/register.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    PortifolioComponent,
    BookingComponent,
    ReviewsComponent,
    LoginComponent,
    SearchComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
