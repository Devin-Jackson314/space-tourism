import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Data, Params} from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  myData: any;
  name: any;
  planet: any;
  planetNames: any;

  constructor(private dataservice: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = {
      name: this.route.snapshot.params['name']
    }
    this.route.params.subscribe((params: Params) => {
      this.name.name = params['name']
    })
   // this.getMyData();
    this.getDataResolve();

  }

   getMyData() {
     return this.dataservice.getData('destinations').subscribe((data) => {
       this.myData = data;
       //console.log(this.myData);

       for (let i = 0; i < this.myData.length; i++){
         console.log(this.myData[i].name.trim().toLowerCase(), this.name.name.trim().toLowerCase(), "checking");
         
         if (this.myData[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
          console.log(this.myData[i], " specific planet2")
           this.planet = this.myData[i];
           break;
         }
       }
       })
  
  }
  
  getDataResolve() {
    this.route.data.subscribe(
      (data: Data) => {
        this.myData = data['planets']
        this.planetNames = this.myData
        //console.log(this.planetNames, 'data')

        for (let i = 0; i < this.myData.length; i++){
        console.log(this.myData[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase(), "new check")
         //console.log(this.myData[i].name.trim(), this.name.name.trim(), "checking");
         if (this.myData[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
           console.log(this.myData[i], " specific planet2")
           this.planet = this.myData[i];
           break;
         }
       }
      }
    )

  }
  
  
  

}
