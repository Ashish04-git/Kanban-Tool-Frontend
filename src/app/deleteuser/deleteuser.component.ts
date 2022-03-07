import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  id: number;
  msg: any;
  user: User= new User();
  flag: boolean=false;
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

  public deleteUser(): void{
    this.s.deleteUser(this.user.id).subscribe((p)=> this.user=p);
    alert("User deleted");
    this.flag=false;
  }

}
