import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ViewusertoadminComponent } from './viewusertoadmin/viewusertoadmin.component';
import { ViewdevelopersComponent } from './viewdevelopers/viewdevelopers.component';
import { ViewprojectsComponent } from './viewprojects/viewprojects.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { DeleteprojectComponent } from './deleteproject/deleteproject.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { ViewbacklogsComponent } from './viewbacklogs/viewbacklogs.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { ViewprojecttasksComponent } from './viewprojecttasks/viewprojecttasks.component';
import { AddprojecttaskComponent } from './addprojecttask/addprojecttask.component';
import { DeleteprojecttaskComponent } from './deleteprojecttask/deleteprojecttask.component';
import { UpdateprojecttaskComponent } from './updateprojecttask/updateprojecttask.component';
import { ViewtaskbyidentiComponent } from './viewtaskbyidenti/viewtaskbyidenti.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ViewusersComponent,
    AdduserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    ViewusertoadminComponent,
    ViewdevelopersComponent,
    ViewprojectsComponent,
    ProjectComponent,
    AddprojectComponent,
    DeleteprojectComponent,
    UpdateprojectComponent,
    ViewbacklogsComponent,
    ProjecttaskComponent,
    ViewprojecttasksComponent,
    AddprojecttaskComponent,
    DeleteprojecttaskComponent,
    UpdateprojecttaskComponent,
    ViewtaskbyidentiComponent,
    LoginComponent,
    DashboardComponent,
    DashboarduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
