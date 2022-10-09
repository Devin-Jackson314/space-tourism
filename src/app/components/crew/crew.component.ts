import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  myData: any;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getMyData();
  }

  getMyData() {
    return this.dataservice.getData('crew').subscribe((data) => {
      this.myData = data;
      console.log(this.myData);
    })
  }

}
