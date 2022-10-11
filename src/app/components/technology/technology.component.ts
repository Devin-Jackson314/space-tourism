import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  myData: any;
 

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getMyData();
  }
  getMyData() {
    return this.dataservice.getData('technology').subscribe((data) => {
      this.myData = data;
       this.router.navigate(['/technology', this.myData[0].name])
      console.log(this.myData);
    })
  }
}
