import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user: User= new User();
  msg: any;
  constructor(private s: UserService) { }

  ngOnInit(): void {
  }

  public addUser(): void{
    this.s.addUser(this.user).subscribe((p)=> {
      if(p['message']!=undefined){
        this.msg= p['message'];
        alert(this.msg);}
      else{
        this.user=p;
        alert("User Added");
      }
    });
  }

}
