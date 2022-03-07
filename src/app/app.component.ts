import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  
  }
  title = 'Kanban';

  constructor(private loc: Location){}
  
  back(){
    this.loc.back();
  }

  signout(): void{
    localStorage.removeItem("password");
    // localStorage.removeItem("pass");
  }
}
