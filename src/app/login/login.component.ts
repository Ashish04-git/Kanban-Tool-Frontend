import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: any;
  op: any;
  user: User= new User();
  constructor(private s: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  check(): void{
    this.s.validate(this.user.loginname, this.user.password).subscribe((p)=> this.op=p);
    if(this.op==true){
      
      if(this.user.role=="Admin"){
        localStorage.setItem('password', this.user.password);
        this.router.navigate(['/dashboarduser'])
      }else{
        localStorage.setItem('password', this.user.password);
        this.router.navigate(['/dashboard'])  
      }
    }else{
      this.msg="Invalid ID or Password";
    }
  }


}
