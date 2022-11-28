import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { CovidRestApiService } from '../covid-rest-api.service';
import { ChartHelperService, Deaths } from './chart-helper.service';


@Component({
  selector: 'app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.css']
})
export class CovidChartComponent implements OnInit {
   
  constructor(private covidApiService: CovidRestApiService, private chartHelperService: ChartHelperService) { }
  
  ngOnInit(): void {
    //this.getChartData('brazil', 'confirmed')
    this.getChartData('brazil', 'deaths')
    this.getChartData('russia', 'deaths')
    this.getChartData('india', 'deaths')
    this.getChartData('china', 'deaths')
    this.getChartData('south-africa', 'deaths')
  }

  covidData = []
  months = []
  chart = new Chart()
  deaths: Deaths = {
    brazil: [],
    russia: [],
    india: [],
    china: [],
    south_africa: []
  }
  // deathsBrazil: any = []
  // deathsChina: any = []
  // deathsUsa: any = []



  getChartData(country: string, status: string) {
    this.covidApiService.getConfirmedCasesByCountry(country, status).subscribe((data: any) => {
      this.filterDataByMonth(data, country)
      console.log('data: ', data)
    })
  }

  filterDataByMonth(data: any[], country: string): void {
    const covidDataByMonth: any = []
    data.filter((el: any) => {
      const dateInfo = el.Date.split('-')
      if (dateInfo[2].substring(0, 2) == '28') {
        covidDataByMonth.push(el)
        console.log(country)
        if(country == 'south-africa') {
          this.deaths.south_africa.push(el.Cases)
        } else {
          this.deaths[country as keyof Deaths].push(el.Cases)
        }
      }
    })
    this.months = this.getMonths(covidDataByMonth)

    this.processChart()
    
  }

  processChart() {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Mortes e casos confirmados de Covid-19 por país'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        line: {
          color: 'red'
        }
      },
      series: [
        {
          type: 'line',
          name: 'Brasil',
          data: this.deaths.brazil,
          color: 'gold'
        },
        {
          type: 'line',
          name: 'Rússia',
          data: this.deaths.russia,
          color: 'red'
        },
        {
          type: 'line',
          name: 'India',
          data: this.deaths.india,
          color: 'green'
        },
        {
          type: 'line',
          name: 'China',
          data: this.deaths.china,
          color: 'orangered'
        },
        {
          type: 'line',
          name: 'África do Sul',
          data: this.deaths.south_africa,
          color: 'cyan'
        },
      ],
      xAxis: {
        type: 'datetime',
        categories: this.months
      }
    });
  }

  getMonths(array: any) {
    return array.map((el: any) => el.Date.split('T')[0])
  } 

}
