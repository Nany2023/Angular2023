import { Injectable } from '@angular/core';
import { Patient } from '../Model/patient';

@Injectable({
  providedIn: 'root'
})
export class Test4ServiceService {

  constructor() { }

  getPatientsList(): Patient[] {
    let pts: Patient[] = [
      { name: "Hasan1", familyName: "Hasani1", telNumber: "123456" },
      { name: "Hasan2", familyName: "Hasani2", telNumber: "123456" },
      { name: "Hasan3", familyName: "Hasani3", telNumber: "123456" },
      { name: "Hasan4", familyName: "Hasani4", telNumber: "123456" },
      { name: "Hasan5", familyName: "Hasani5", telNumber: "123456" }
    ];

    return pts;
  }
}
