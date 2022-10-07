import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   
 

  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("hamburger")!.style.marginLeft = "0";
  }
  openNav() {
    document.getElementById("mySidenav")!.style.width = "200px";
    document.getElementById("hamburger")!.style.marginLeft = "350px";
    
  }
}
 