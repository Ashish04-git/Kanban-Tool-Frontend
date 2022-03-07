import { Component, OnInit } from '@angular/core';
import { ProjectTask } from '../ProjectTask';
import { ProjecttaskserviceService } from '../projecttaskservice.service';

@Component({
  selector: 'app-viewtaskbyidenti',
  templateUrl: './viewtaskbyidenti.component.html',
  styleUrls: ['./viewtaskbyidenti.component.css']
})
export class ViewtaskbyidentiComponent implements OnInit {

  projectTasks: ProjectTask[];
  msg: any;
  flag: boolean=false;
  projectTask: ProjectTask= new ProjectTask();
  constructor(private s: ProjecttaskserviceService) { }

  ngOnInit(): void {
  }

  public viewTaskByIdentifier(): void{
    this.flag=true;
    this.s.viewTaskByIdentifier(this.projectTask.backlog.projectIdentifier).subscribe((p)=>{
      if(p['message']!= undefined){
        this.msg=p['message'];
        this.flag= false;
        alert(this.msg);
      }else{
        this.projectTasks=p;
      }
    })
  }

}
