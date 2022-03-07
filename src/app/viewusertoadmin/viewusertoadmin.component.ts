import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewusertoadmin',
  templateUrl: './viewusertoadmin.component.html',
  styleUrls: ['./viewusertoadmin.component.css']
})
export class ViewusertoadminComponent implements OnInit {

  users: User[];
  msg: any;
  constructor(private s: UserService) {
    this.s.viewUserToAdmin().subscribe((p)=>{
      if(p['message']!= undefined){
        this.msg= p['message'];
        alert(this.msg);
      }else{
        this.users=p;
      }
    });
   }

  ngOnInit(): void {
  }

}
