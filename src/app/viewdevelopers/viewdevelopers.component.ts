import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewdevelopers',
  templateUrl: './viewdevelopers.component.html',
  styleUrls: ['./viewdevelopers.component.css']
})
export class ViewdevelopersComponent implements OnInit {

  users: User[];
  msg: any;
  constructor(private s : UserService) { 
    this.s.viewdevelopers().subscribe((p)=>{
      if(p['message']!= undefined){
        this.msg= p['message'];
        alert(this.msg);
      }else{
        this.users=p;
      }
    })
  }

  ngOnInit(): void {
  }

}
