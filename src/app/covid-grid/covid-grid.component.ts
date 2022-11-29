import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { CovidGridHelperService } from './grid-helper.service';
import { covidData } from './grid-mock';

@Component({
  selector: 'app-covid-grid',
  templateUrl: './covid-grid.component.html',
  styleUrls: ['./covid-grid.component.css']
})
export class CovidGridComponent implements OnInit {

  constructor(public gridHelper: CovidGridHelperService) {}

  ngOnInit(): void {
  }

  columnDefs: ColDef[] = [
    { headerName: 'País', field: 'country', 
      comparator: this.gridHelper.localeCompare 
    },
    { headerName: 'Testados', field: 'tested', 
      valueFormatter: this.gridHelper.formatNumber
    },
    { headerName: 'Infectados', field: 'infected', 
      valueFormatter: this.gridHelper.formatNumber 
    },
    { headerName: 'Recuperados', field: 'recovered', 
      valueFormatter: this.gridHelper.formatNumber
    },
    { headerName: 'Mortes', field: 'deceased', 
      valueFormatter: this.gridHelper.formatNumber
    },
  ];
  
  rowData: any = [];
  onGridReady(params: GridReadyEvent) {
    this.rowData = covidData
  }

}
