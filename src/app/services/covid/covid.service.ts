import { Injectable } from '@angular/core';
import {api} from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }
}
