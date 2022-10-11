import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  myData: any;

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getMyData();
  }

  getMyData() {
     return this.dataservice.getData('destinations').subscribe((data) => {
       this.myData = data;
       this.router.navigate(['/destination', this.myData[0].name])
       console.log(this.myData);
       })
  
  

  }

}
