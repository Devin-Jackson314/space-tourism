import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
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
