import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ChartModule } from 'angular-highcharts';
import { ChartTestComponent } from './app/chart-test/chart-test.component';
import { CovidChartComponent } from './app/covid-chart/covid-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartTestComponent,
    CovidChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
