import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectUrl } from './ProjectUrl';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string= ProjectUrl.getConnection();
  constructor(private h: HttpClient) { }

  public viewUsers(): Observable<any>{
    return this.h.get<any>(this.url+"user/list");
  }

  public addUser(user: User): Observable<any>{
    return this.h.post(this.url+"user/add",user);
  }

  public getUserById(id: number): Observable<any>{
    return this.h.get<any>(this.url+"user/userid/"+id);
    
  }

  public updateUser(user: User): Observable<any>{
    return this.h.put(this.url+"user/update", user);
  }

  public deleteUser(id: number): Observable<any>{
    return this.h.delete(this.url+"user/delete/"+id);
  }

  public viewUserToAdmin(): Observable<any>{
    return this.h.get<any>(this.url+"user/userlist");
  }

  public viewdevelopers(): Observable<any>{
    return this.h.get<any>(this.url+"user/devlist");
  }

  public validate(loginname: string, password: string): Observable<any>{
    return this.h.get<any>(this.url+"user/validate/"+loginname+"/"+password);
  }
}
