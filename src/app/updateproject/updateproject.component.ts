import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent implements OnInit {

  id: number;
  msg: any;
  flag: boolean= false;
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

  public updateProject(): void{
    this.s.updateproject(this.project).subscribe((p)=>this.project=p);
    alert("Project Updated");
    this.flag=false;
  }
}
