import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from '../models/value';
@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private http:HttpClient) {
   
   }
  value : Value[]=[]; 
  ngOnInit() {
    this.getValues().subscribe(data=>{
      this.value =data
    })
  }

  getValues(){
    return this.http.get<Value[]>("https://localhost:7031/api/values")
  }

}
