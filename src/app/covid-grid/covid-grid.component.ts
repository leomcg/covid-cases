import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { covidData } from './mock';

@Component({
  selector: 'app-covid-grid',
  templateUrl: './covid-grid.component.html',
  styleUrls: ['./covid-grid.component.css']
})
export class CovidGridComponent implements OnInit {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  rowData: any;

  constructor() {}

  ngOnInit(): void {
  }

columnDefs: ColDef[] = [
  { headerName: 'País', field: 'country' },
  { headerName: 'Testados', field: 'tested', 
    valueFormatter: params => {
      const data = params.data.tested
      if (!data) return 'Não disponível'
      return data.toLocaleString('pt-br')
    }, 
    sortingOrder: ['asc', 'desc']
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
