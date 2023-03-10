import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../Model/patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  @Input() patientForDetail: Patient = { name: "", familyName: "", telNumber: "" };

  constructor() { }

  ngOnInit(): void {
  }

}
