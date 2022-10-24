import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { IpadModule } from './pages/ipad/ipad.module';
import { AirpodsModule } from './pages/airpods/airpods.module';
import { IphoneModule } from './pages/iphone/iphone.module';
import { MacModule } from './pages/mac/mac.module';
import { AppleWatchModule } from './pages/apple-watch/apple-watch.module';
import { CreateIphoneModule } from './pages/iphone-create/create-iphone.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    IphoneModule,
    MacModule,
    AirpodsModule,
    AppleWatchModule,
    IpadModule,
    CreateIphoneModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
