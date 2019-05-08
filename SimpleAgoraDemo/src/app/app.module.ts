import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc'; // Add
// Add
const agoraConfig: AgoraConfig = {
  AppID: 'APPIDHERE',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularAgoraRtcModule.forRoot(agoraConfig) // Add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
