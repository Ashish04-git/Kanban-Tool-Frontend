import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user: User= new User();
  flag: boolean=false;
  id: number;
  msg: any;
  constructor(private s: UserService) { }

  ngOnInit(): void {
  }

  public getUserById(): void{
    this.flag=true;
    this.s.getUserById(this.id).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        this.flag=false;
        alert(this.msg);}
      else {
        this.user=p;
      }
    });
  }

  public updateUser(): void{
    this.s.updateUser(this.user).subscribe((p)=>this.user=p);
    alert("User Updated");
    this.flag=false;
  }
}
