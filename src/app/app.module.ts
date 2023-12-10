import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrafficRestService } from './services/traffic-rest.service';
import { TrafficSoapService } from './services/traffic-soap.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ TrafficRestService, TrafficSoapService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
