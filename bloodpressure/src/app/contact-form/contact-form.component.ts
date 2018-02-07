import { Component, OnInit } from '@angular/core';
import { BloodPressureService } from '../services/bloodpressureservice.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

	bpData: any = [];

 	log(x) {console.log(x); }

	constructor (private bpService: BloodPressureService) { }
	
	ngOnInit() {
		this.getAllPatientsData();
	}

	getAllPatientsData() {
		this.bpService.getAllPatientsDetails().subscribe((res) => {
			this.bpData = res;
		}, (err) => {
			console.log(err);
		});
	}

	onSubmit(formObj) {
		console.log(formObj);
		this.bpService.addPatientDetails(formObj).subscribe((res) => {
			this.getAllPatientsData();
		}, (err) => {
			console.log(err);
		});
	}
}


