import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { CovidRestApiService } from '../covid-rest-api.service';
import { ChartHelperService, Cases } from './chart-helper.service';


@Component({
  selector: 'app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.css']
})
export class CovidChartComponent implements OnInit {
   
  constructor(private covidApiService: CovidRestApiService, private chartHelperService: ChartHelperService) { }
  
  ngOnInit(): void {
    this.getData('confirmed')
  }

  loading = true
  months = []
  chart = new Chart()
  cases: Cases = {
    brazil: [],
    russia: [],
    india: [],
    china: []
  }

  getData(caseType: string) {
    const countries = ['brazil', 'russia', 'india', 'china']
    this.loading = true
    countries.forEach(el => this.getChartData(el, caseType))
  }

  getChartData(country: string, caseType: string) {
    this.covidApiService.getConfirmedCasesByCountry(country, caseType).subscribe((data: any) => {
      this.clearData(country)
      this.filterDataByMonth(data, country)
    })
  }

  clearData(country: string) {
    this.months = []
    this.cases[country as keyof Cases] = []
  }

  filterDataByMonth(data: any[], country: string): void {
    const covidDataByMonth: any = []
    data.filter((el: any) => {
      const dateArray = el.Date.split('-')
      // pegando numero de casos por mês (todo dia 28)
      if (dateArray[2].substring(0, 2) == '28') {
        covidDataByMonth.push(el)
  
        this.cases[country as keyof Cases].push(el.Cases)
        // corrigindo retorno da api que retorna um dado a mais para a china
        this.cases.china = this.cases.china.slice(0, 34)
      }
    })

    this.months = this.chartHelperService.formatDates(covidDataByMonth)
    //console.log('months: ', this.months)

    setTimeout(() => {
      this.loading = false
      this.processChart()
    }, 2500)
    
  }

  processChart() {
    this.chart = this.chartHelperService.processChart(this.cases, this.months)
  }

  onCaseTypeChange(caseType: string) {
    this.getData(caseType)
  }

}
