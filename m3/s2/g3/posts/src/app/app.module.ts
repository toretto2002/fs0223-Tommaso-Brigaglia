import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './Pages/home/home.component';
import { PostAttiviComponent } from './Pages/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './Pages/post-inattivi/post-inattivi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
