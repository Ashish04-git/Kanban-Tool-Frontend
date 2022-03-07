import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-viewprojects',
  templateUrl: './viewprojects.component.html',
  styleUrls: ['./viewprojects.component.css']
})
export class ViewprojectsComponent implements OnInit {

  projects: Project[];
  constructor(private s: ProjectserviceService) {
    this.s.viewprojects().subscribe((p)=> this.projects=p);
   }

  ngOnInit(): void {
  }

}
