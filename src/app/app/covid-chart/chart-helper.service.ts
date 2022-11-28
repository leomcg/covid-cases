import { Injectable } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Injectable({
  providedIn: 'root'
})
export class ChartHelperService {

  constructor() { }

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: 'line',
        name: 'Line 1',
        data: [1, 2, 3],
      }
    ],
  });

}

export type Deaths = { 
  brazil: any[],
  russia: any[],
  india: any[],
  china: any[],
  south_africa: any[]
}
