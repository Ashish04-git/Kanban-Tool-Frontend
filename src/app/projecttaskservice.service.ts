import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectTask } from './ProjectTask';
import { ProjectUrl } from './ProjectUrl';

@Injectable({
  providedIn: 'root'
})
export class ProjecttaskserviceService {

  url: string= ProjectUrl.getConnection();
  constructor(private h: HttpClient) { }

  public viewProjectTasks(): Observable<any>{
    return this.h.get<any>(this.url+"projectTask/list");
  }

  public addProjectTask(projectTask: ProjectTask): Observable<any>{
    return this.h.post(this.url+"projectTask/create", projectTask);
  }

  public viewTask(id: number): Observable<any>{
    return this.h.get<any>(this.url+"projectTask/viewtask/"+id);
  }

  public deleteTask(id: number): Observable<any>{
    return this.h.delete(this.url+"projectTask/delete/"+id);
  }

  public updateTask(projectTask: ProjectTask): Observable<any>{
    return this.h.put(this.url+"projectTask/update", projectTask);
  }

  public viewTaskByIdentifier(identifier: string): Observable<any>{
    return this.h.get<any>(this.url+"projectTask/projlist/"+identifier);
  }
}
