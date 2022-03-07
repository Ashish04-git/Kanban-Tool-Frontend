import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  users: User[];
  constructor(private s: UserService) {
    this.s.viewUsers().subscribe((p)=> this.users=p);
  }

  ngOnInit(): void {
  }

}
