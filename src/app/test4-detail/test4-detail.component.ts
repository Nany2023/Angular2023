import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../Model/patient';

@Component({
  selector: 'app-test4-detail',
  templateUrl: './test4-detail.component.html',
  styleUrls: ['./test4-detail.component.css']
})
export class Test4DetailComponent implements OnInit {
  @Input() patientForDetail: Patient = { name: "", familyName: "", telNumber: "" };

  constructor() { }

  ngOnInit(): void {
  }

}
