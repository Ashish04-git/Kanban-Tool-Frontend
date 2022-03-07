import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-deleteproject',
  templateUrl: './deleteproject.component.html',
  styleUrls: ['./deleteproject.component.css']
})
export class DeleteprojectComponent implements OnInit {

  id: number;
  msg: any;
  flag: boolean=false;
  project: Project= new Project();
  constructor(private s: ProjectserviceService) { }

  ngOnInit(): void {
  }

  public viewProject(): void{
    this.flag=true;
    this.s.viewProject(this.id).subscribe((p)=> {
      if(p['message']!= undefined){
        this.msg= p['message'];
        this.flag=false
        alert(this.msg);
      }else{
        this.project= p;
      }
    });
  }

  public deleteProject(): void{
    this.s.deleteProject(this.project.id).subscribe((p)=> this.project=p);
    alert("Project deleted");
    this.flag=false;
  }

}
