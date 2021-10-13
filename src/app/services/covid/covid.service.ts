import { Injectable } from '@angular/core';
import { api } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Data } from './interface/data';
@Injectable({
  providedIn: 'root',
})
export class CovidService {
  private url = `${api}${'jhu-edu'} `
  constructor(private http: HttpClient) {}
  /*
Obtiene las estadisticas globales de covid
*/
  getWorldData() {
    let path = `${this.url}${'/brief'} `
    return this.http.get<Data[]>(path);
  }
  /*
Obtiene las estadisticas de covid segun el pais seleccionado
*/
  getCountryData(iso:string) {
    let path = `${this.url}${'/timeseries/' + iso} `
    return this.http.get<Data[]>(path);
  }
}
