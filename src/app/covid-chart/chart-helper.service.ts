import { Injectable } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Injectable({
  providedIn: 'root'
})
export class ChartHelperService {
  constructor() { }

  processChart(cases: any, months: string[]) {
    return new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type: 'line',
          name: 'Brasil',
          data: cases.brazil,
          color: 'green'
        },
        {
          type: 'line',
          name: 'Rússia',
          data: cases.russia,
          color: 'navy'
        },
        {
          type: 'line',
          name: 'Índia',
          data: cases.india,
          color: 'orange'
        },
        {
          type: 'line',
          name: 'China',
          data: cases.china,
          color: 'red'
        },
      ],
      xAxis: {
        type: 'datetime',
        categories: months
      },
      plotOptions: {
        line: {
          marker: {
            symbol: 'circle'
          }
        }
      }
    });
    
  }

  formatDates(array: any) {
    const temp = array.map((el: any) => el.Date.split('T')[0])
    return temp.map((el:string) => {
      const [year, month] = el.split('-');
      const result = [month, year].join('/');
      console.log(result)
      return result
    })
  }

}

export type Cases = { 
  brazil: any[],
  russia: any[],
  india: any[],
  china: any[]
}
