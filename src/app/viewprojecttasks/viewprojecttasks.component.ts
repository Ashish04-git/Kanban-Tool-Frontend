import { Component, OnInit } from '@angular/core';
import { ProjectTask } from '../ProjectTask';
import { ProjecttaskserviceService } from '../projecttaskservice.service';

@Component({
  selector: 'app-viewprojecttasks',
  templateUrl: './viewprojecttasks.component.html',
  styleUrls: ['./viewprojecttasks.component.css']
})
export class ViewprojecttasksComponent implements OnInit {

  projectTasks: ProjectTask[];
  msg: any;
  constructor(private s: ProjecttaskserviceService) {
    this.s.viewProjectTasks().subscribe((p)=> {
      if(p['message']!= undefined){
        this.msg= p['message'];
        alert(this.msg);
      }else{
        this.projectTasks= p;
      }
    });
   }

  ngOnInit(): void {
  }

}
