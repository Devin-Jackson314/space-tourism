import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crewmembers',
  templateUrl: './crewmembers.component.html',
  styleUrls: ['./crewmembers.component.css']
})
export class CrewmembersComponent implements OnInit {
  myData: any;
  name: any;
  crewName: any;
  crewNames: any;

  constructor(private dataservice: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.name = {
      name: this.route.snapshot.params['name']
    }
    this.route.params.subscribe((params: Params) => {
      this.name.name = params['name']
    })
    this.getDataResolve();
   //this.getMyData();
  }

  getMyData() {
    return this.dataservice.getData('crew').subscribe((data) => {
      this.myData = data;
      console.log(this.myData[0], 'crew data')

      for (let i = 0; i < this.myData.length; i++) {
       console.log(this.myData[i].name.trim().toLowerCase(), this.name.name.trim().toLowerCase(), "checking");
        
        if (this.myData[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
          
          this.crewName = this.myData[i];
          break;
        }
        
      }
          

    })
  }


   getDataResolve() {
    this.route.data.subscribe(
      (data: Data) => {
        this.myData = data['crewmembers']
        this.crewNames = this.myData
        //console.log(this.planetNames, 'data')

        for (let i = 0; i < this.myData.length; i++){
        console.log(this.myData[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase(), "new check")
         //console.log(this.myData[i].name.trim(), this.name.name.trim(), "checking");
         if (this.myData[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
           console.log(this.myData[i], " crew name")
           this.crewName = this.myData[i];
           break;
         }
       }
      }
    )

  }




}
