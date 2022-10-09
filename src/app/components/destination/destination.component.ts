import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  myData: any;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getMyData();
  }

  getMyData() {
     return this.dataservice.getData('destinations').subscribe((data) => {
       this.myData = data;
       console.log(this.myData);
       })
  
  

  }

}
