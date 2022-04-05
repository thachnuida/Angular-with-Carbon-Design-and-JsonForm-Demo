import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from 'carbon-components-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusCardModule } from './components/status-card/status-card.module';

import { InformationModule } from '@carbon/icons-angular';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    InformationModule,


    StatusCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
