import { Component, OnInit } from '@angular/core';
import { Backlog } from '../Backlog';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-viewbacklogs',
  templateUrl: './viewbacklogs.component.html',
  styleUrls: ['./viewbacklogs.component.css']
})
export class ViewbacklogsComponent implements OnInit {

  backlogs: Backlog[];
  msg: any;
  constructor(private s: ProjectserviceService) {
    this.s.viewBacklogs().subscribe((p)=> {
      if(p['message']!= undefined){
        this.msg=p['message'];
        alert(this.msg);
      }else{
        this.backlogs=p;
      }
    })
   }

  ngOnInit(): void {
  }

}
