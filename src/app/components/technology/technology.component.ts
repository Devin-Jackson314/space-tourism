import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  myData: any;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getMyData();
  }
  getMyData() {
    return this.dataservice.getData('technology').subscribe((data) => {
      this.myData = data;
      console.log(this.myData);
    })
  }
}
