import { Injectable } from '@angular/core';
import { Patient } from '../Model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor() { }

  public getPatients(): Patient[] {
    let patients: Patient[] = [
      { name: "Ahmad1", familyName: "Ahmadi1", telNumber: "111" },
      { name: "Ahmad2", familyName: "Ahmadi2", telNumber: "222" },
      { name: "Ahmad3", familyName: "Ahmadi3", telNumber: "333" },
      { name: "Ahmad4", familyName: "Ahmadi4", telNumber: "444" }];

    return patients;
  }

}
