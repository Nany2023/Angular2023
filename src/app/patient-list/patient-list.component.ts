import { Component, OnInit } from '@angular/core';
import { Patient } from '../Model/patient';
import { PatientServiceService } from '../service/patient-service.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  currentIndex: Number = -1;

  selectedPatient: Patient = { name: "", familyName: "", telNumber: "" }

  constructor(private ptService: PatientServiceService) { }

  ngOnInit(): void {
    this.patients = this.ptService.getPatients();
  }

  getSelectedPatient(patient: Patient, index: Number) {
    this.selectedPatient = patient;
    this.currentIndex = index;
  }
}
