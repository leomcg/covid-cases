import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.css']
})
export class ChartTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
    xAxis: {
      type:'datetime',
      categories: ['2020-02-26', '2020-02-27', '2020-02-28']
    }
  });

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
