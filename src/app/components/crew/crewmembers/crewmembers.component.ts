import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private dataservice: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.name = {
      name: this.route.snapshot.params['name']
    }
    this.route.params.subscribe((params: Params) => {
      this.name.name = params['name']
    })
    this.getMyData();
  }

  getMyData() {
    return this.dataservice.getData('crew').subscribe((data) => {
      this.myData = data;
      console.log(this.myData, 'crew data')

      for (let i = 0; i < this.myData.length; i++) {
        console.log(this.myData[i].name.trim().toLowerCase(), this.name.name.trim().toLowerCase(), "checking");
         
        if (this.myData[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
          console.log(this.myData[i], " specific crew member")
          this.crewName = this.myData[i];
          break;
        }
      }
    })
  }

}
