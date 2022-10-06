import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myData: any;



  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getMyData();
  }

   getMyData() {
     return this.dataservice.getData().subscribe((data) => {
      this.myData = data
      //console.log(data, "Here is your data");
       console.log(this.myData.crew, "CREW");
       sessionStorage.setItem('destinations', JSON.stringify(this.myData.destinations));
       
       console.log(sessionStorage, "session storage");
   
      
      
    })
  
  

  }

}
