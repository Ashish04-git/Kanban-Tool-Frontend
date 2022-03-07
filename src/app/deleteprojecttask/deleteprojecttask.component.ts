import { Component, OnInit } from '@angular/core';
import { ProjectTask } from '../ProjectTask';
import { ProjecttaskserviceService } from '../projecttaskservice.service';

@Component({
  selector: 'app-deleteprojecttask',
  templateUrl: './deleteprojecttask.component.html',
  styleUrls: ['./deleteprojecttask.component.css']
})
export class DeleteprojecttaskComponent implements OnInit {

  id: number;
  msg: any;
  flag: boolean=false;
  projectTask: ProjectTask= new ProjectTask();
  constructor(private s: ProjecttaskserviceService) { }

  ngOnInit(): void {
  }

  public viewTask(): void{
    this.flag=true;
    this.s.viewTask(this.id).subscribe((p)=> {
      if(p['message']!= undefined){
        this.msg= p['message'];
        this.flag=false
        alert(this.msg);
      }else{
        this.projectTask= p;
      }
    });
  }

  public deleteTask(): void{
    this.s.deleteTask(this.projectTask.ptsk_Id).subscribe((p)=> this.projectTask=p);
    alert("Task Deleted");
    this.flag=false;
  }

}
