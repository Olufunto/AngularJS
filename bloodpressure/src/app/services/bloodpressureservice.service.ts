import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {AppConfig} from '../../assets/config';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BloodPressureService {

  constructor(private http: HttpClient) { }

  getAllPatientsDetails() {
    return this.http.get(`${AppConfig.BASE_API}/api/reading/`);

  }

  addPatientDetails(formObj) {
	// let body = JSON.stringify(formObj);
	return this.http.post(`${AppConfig.BASE_API}/api/reading/`, formObj, httpOptions);
  }

}



