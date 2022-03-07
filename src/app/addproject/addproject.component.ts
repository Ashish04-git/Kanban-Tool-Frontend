import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  project: Project= new Project();
  msg: any;
  constructor(private s: ProjectserviceService) { }

  ngOnInit(): void {
  }

  public addProject(): void{
    this.s.addProject(this.project).subscribe((p)=> {
      if(p['message']!= undefined){
        this.msg= p['message'];
        alert(this.msg);
      }else{
        this.project=p;
      alert("Project Added");}
    })
  }

}
