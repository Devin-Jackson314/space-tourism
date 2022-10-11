import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-techdisplay',
  templateUrl: './techdisplay.component.html',
  styleUrls: ['./techdisplay.component.css']
})
export class TechdisplayComponent implements OnInit {
  myData: any;
  name: any;
  tech: any;
  techNames: any;

  constructor(private dataservice: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.name = {
      name: this.route.snapshot.params['name']
    }
    this.route.params.subscribe((params: Params) => {
      this.name.name = params['name']
    })
     this.getDataResolve();

  }

   getMyData() {
     return this.dataservice.getData('technology').subscribe((data) => {
       this.myData = data;
       //console.log(this.myData);

       for (let i = 0; i < this.myData.length; i++){
         console.log(this.myData[i].name.trim().toLowerCase(), this.name.name.trim().toLowerCase(), "checking");
         
         if (this.myData[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
          console.log(this.myData[i], " specific tech")
           this.tech = this.myData[i];
           break;
         }
       }
       })
  
   }
  
  getDataResolve() {
    this.route.data.subscribe(
      (data: Data) => {
        this.myData = data['techoptions']
        this.techNames = this.myData
        //console.log(this.planetNames, 'data')

        for (let i = 0; i < this.myData.length; i++){
        console.log(this.myData[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase(), "new check")
         //console.log(this.myData[i].name.trim(), this.name.name.trim(), "checking");
         if (this.myData[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
           console.log(this.myData[i], " specific tech2")
           this.tech = this.myData[i];
           break;
         }
       }
      }
    )

  }

}
