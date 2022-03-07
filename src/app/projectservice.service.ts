import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './Project';
import { ProjectUrl } from './ProjectUrl';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  url: string= ProjectUrl.getConnection();
  constructor(private h: HttpClient) { }

  public viewprojects(): Observable<any>{
    return this.h.get<any>(this.url+"project/list");
  }

  public addProject(project: Project): Observable<any>{
    return this.h.post(this.url+"project/create", project);
  }

  public deleteProject(id: number): Observable<any>{
    return this.h.delete(this.url+"project/delete/"+id);
  }

  public viewProject(id: number): Observable<any>{
    return this.h.get<any>(this.url+"project/viewproject/"+id);
  }

  public updateproject(project: Project): Observable<any>{
    return this.h.put(this.url+"project/update", project);
  }

  public viewBacklogs(): Observable<any>{
    return this.h.get<any>(this.url+"backlog/list");
  }
}
