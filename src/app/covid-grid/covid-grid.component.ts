import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { covidData } from './grid-mock';

@Component({
  selector: 'app-covid-grid',
  templateUrl: './covid-grid.component.html',
  styleUrls: ['./covid-grid.component.css']
})
export class CovidGridComponent implements OnInit {
  rowData: any;

  constructor() {}

  ngOnInit(): void {
  }

columnDefs: ColDef[] = [
  { headerName: 'País', field: 'country', 
    comparator: (valueA, valueB, nodeA, nodeB, isDescending) => valueA.localeCompare(valueB) 
  },
  { headerName: 'Testados', field: 'tested', 
    valueFormatter: (params) => {
      const data = params.data.tested
      if (!data) return 'Não disponível'
      return data.toLocaleString('pt-br')
    },
  },
  { headerName: 'Infectados', field: 'infected', 
    valueFormatter: params => {
      const data = params.data.infected
      if (!data) return 'Não disponível'
      return data.toLocaleString('pt-br')
    }, 
  },
  { headerName: 'Recuperados', field: 'recovered', 
    valueFormatter: params => {
      const data = params.data.recovered
      if (!data) return 'Não disponível'
      return data.toLocaleString('pt-br')
    }, 
  },
  { headerName: 'Mortes', field: 'deceased', 
    valueFormatter: params => {
      const data = params.data.deceased
      if (!data) return 'Não disponível'
      return data.toLocaleString('pt-br')
    }, 
  },
];

defaultColDef: ColDef = {
  sortable: true,
  sortingOrder: ['desc', 'asc']
};

onGridReady(params: GridReadyEvent) {
  this.rowData = covidData
}



}
