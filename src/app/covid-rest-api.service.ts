import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidRestApiService {

  baseUrl = 'https://api.covid19api.com/'

  constructor(private http: HttpClient) { }
  
  getConfirmedCasesByCountry(country: string, caseType: string) {
    return this.http.get(this.baseUrl + `total/dayone/country/${country}/status/${caseType}`)
  }
}
