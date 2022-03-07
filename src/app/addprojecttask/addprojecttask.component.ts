import { Component, OnInit } from '@angular/core';
import { ProjectTask } from '../ProjectTask';
import { ProjecttaskserviceService } from '../projecttaskservice.service';

@Component({
  selector: 'app-addprojecttask',
  templateUrl: './addprojecttask.component.html',
  styleUrls: ['./addprojecttask.component.css']
})
export class AddprojecttaskComponent implements OnInit {

  projectTask: ProjectTask= new ProjectTask();
  msg: any;
  constructor(private s: ProjecttaskserviceService) { }

  ngOnInit(): void {
  }

  public addProjectTask(): void{
    this.s.addProjectTask(this.projectTask).subscribe((p)=>{
      if(p['message']!= undefined){
        this.msg= p['message'];
        alert(this.msg);
      }else{
        this.projectTask=p;
        alert("Task Added");
      }
    });
  }

}
