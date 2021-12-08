import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-avg',
  templateUrl: './find-avg.component.html',
  styleUrls: ['./find-avg.component.css']
})
export class FindAvgComponent implements OnInit {
  result:number=0;
  constructor() { }
  average(m1:string,m2:string,m3:string)
  {
    this.result=(parseInt(m1)+parseInt(m2)+parseInt(m3))/3;
  }
  ngOnInit(): void {
  }

}
