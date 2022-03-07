import { Component, OnInit } from '@angular/core';
import { ProjectTask } from '../ProjectTask';
import { ProjecttaskserviceService } from '../projecttaskservice.service';

@Component({
  selector: 'app-updateprojecttask',
  templateUrl: './updateprojecttask.component.html',
  styleUrls: ['./updateprojecttask.component.css']
})
export class UpdateprojecttaskComponent implements OnInit {

  id: number;
  msg: any;
  flag: boolean= false;
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

  public updateTask(): void{
    this.s.updateTask(this.projectTask).subscribe((p)=> this.projectTask=p);
    alert("Task Updated");
    this.flag=false;
  }

}
