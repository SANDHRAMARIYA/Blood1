import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor(private myapi:ApiService) { 
this.fetchData()
  }






  fetchData=()=>{
    this.myapi.viewBlood().subscribe(
     (data)=>{
      this.donarData=data
     }
    )
  }
  donarData:any=[]
  ngOnInit(): void {
  }

}
