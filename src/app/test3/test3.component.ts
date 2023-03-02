import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  servername: string = "Strasbourg-server_1";
  isButtonDisabled: boolean = true;
  // animals = ["dog", "cat", "horse", "cow"];
  // //////////////////////////////////////////
  isTextEnabled: boolean = true;
  countries = ["France", "Netherland", "Iran", "USA"];

  Persons =
    [{ fname: "hasan", lname: "Hasani" },
    { fname: "Nariman", lname: "Khodavirdi" }];

  constructor() { }

  ngOnInit(): void {
  }
  getServerName() {
    return this.servername;
  }

  alertMe() {
    alert("Salam");
  }

  inputTagValue: string = "";

  // onUpdateInputValue(event: Event) {
  //   console.log(event);
  //   this.inputTagValue = (event.target as HTMLInputElement).value;
  // }

  getInputText(event: Event) {
    if ((event.target as HTMLInputElement).value == "yes") {
      this.inputTagValue = "Done!";
    }
    else {
      this.inputTagValue = "is not done !";
    }
  }

  twoWayDataBindingTest: string = "123";


  CkeckInputText() {
    console.log(this.twoWayDataBindingTest);
    alert(this.twoWayDataBindingTest);
  }
  // CkeckInputText() {
  //   let inputText = (<HTMLInputElement>document.getElementById("myInput")).value;
  //   if (inputText == "yes") {
  //     alert("Done!")
  //   } else {
  //     alert("not done!")
  //   }
  // }

  getInputValue(event: Event) {
    (event.target as HTMLInputElement).value
  }


  getColor() {
    return "green";
  }




}
