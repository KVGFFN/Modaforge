import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [AppComponent, SafePipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SafePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}