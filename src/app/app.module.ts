import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IphonePageComponent } from './iphone-page/iphone-page.component';
import { MacPageComponent } from './mac-page/mac-page.component';
import { AppleWatchPageComponent } from './apple-watch-page/apple-watch-page.component';
import { AirpodsPageComponent } from './airpods-page/airpods-page.component';
import { IpadPageComponent } from './ipad-page/ipad-page.component';
import { HttpClientModule } from '@angular/common/http';
import { IphoneCardComponent } from './iphone-page/iphone-card/iphone-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IphonePageComponent,
    MacPageComponent,
    AppleWatchPageComponent,
    AirpodsPageComponent,
    IpadPageComponent,
    IphoneCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
