import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
