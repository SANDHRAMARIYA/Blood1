import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddonar',
  templateUrl: './adddonar.component.html',
  styleUrls: ['./adddonar.component.css']
})
export class AdddonarComponent implements OnInit {

  constructor() { }





Name=""
Blood=""
Dob=""
Occupation=""
Dieases=""
DonateDate=""
Address=""
Pincode=""
Phnum=""
Email=""


readValues=()=>{
  let data = {
    "Name":this.Name,
    "Blood":this.Blood,
    "Dob":this.Dob,
    "Occupation":this.Occupation,
    "Dieasess":this.Dieases,
    "DonateDate":this.DonateDate,
    "Address":this.Address,
    "Pincode":this.Pincode,
    "Phnum":this.Phnum,
  "Email":this.Email
  }
  console.log(data)
}


  ngOnInit(): void {
  }

}
