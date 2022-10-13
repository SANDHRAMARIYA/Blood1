import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdonar',
  templateUrl: './searchdonar.component.html',
  styleUrls: ['./searchdonar.component.css']
})
export class SearchdonarComponent implements OnInit {

  constructor() { }



  Blood=""
readValues=()=>{
  let data = {
    "Blood":this.Blood
  }
  console.log(data)
}

  ngOnInit(): void {
  }

}
