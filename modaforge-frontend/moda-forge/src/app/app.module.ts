import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { RequestListComponent } from './components/requests/request-list/request-list.component';
import { RequestCardComponent } from './components/requests/request-card/request-card.component';
import { RequestCreateComponent } from './components/requests/request-create/request-create.component';

@NgModule({
  declarations: [AppComponent, RequestListComponent, RequestCardComponent, RequestCreateComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
