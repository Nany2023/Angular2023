import { Component, OnInit } from '@angular/core';
import { Patient } from '../Model/patient';
import { Test4ServiceService } from '../test4service/test4-service.service'

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {
  patients: Patient[] = [];

  constructor(private t4Service: Test4ServiceService) { }

  ngOnInit(): void {
    this.patients = this.t4Service.getPatientsList();
  }

}
