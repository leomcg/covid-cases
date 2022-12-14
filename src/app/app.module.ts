import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ChartModule } from 'angular-highcharts';
import { AgGridModule } from 'ag-grid-angular';

import { CovidChartComponent } from './covid-chart/covid-chart.component';
import { CovidGridComponent } from './covid-grid/covid-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidChartComponent,
    CovidGridComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
