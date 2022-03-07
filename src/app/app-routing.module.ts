import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { AddprojecttaskComponent } from './addprojecttask/addprojecttask.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { DeleteprojectComponent } from './deleteproject/deleteproject.component';
import { DeleteprojecttaskComponent } from './deleteprojecttask/deleteprojecttask.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { LoginComponent } from './login/login.component';
import { Project } from './Project';
import { ProjectComponent } from './project/project.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { UpdateprojecttaskComponent } from './updateprojecttask/updateprojecttask.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserComponent } from './user/user.component';
import { ViewbacklogsComponent } from './viewbacklogs/viewbacklogs.component';
import { ViewdevelopersComponent } from './viewdevelopers/viewdevelopers.component';
import { ViewprojectsComponent } from './viewprojects/viewprojects.component';
import { ViewprojecttasksComponent } from './viewprojecttasks/viewprojecttasks.component';
import { ViewtaskbyidentiComponent } from './viewtaskbyidenti/viewtaskbyidenti.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewusertoadminComponent } from './viewusertoadmin/viewusertoadmin.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboarduser',
    component: DashboarduserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewusers',
    component: ViewusersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'adduser',
    component: AdduserComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'updateuser',
    component: UpdateuserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'deleteuser',
    component: DeleteuserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewusertoadmin',
    component: ViewusertoadminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewdevelopers',
    component: ViewdevelopersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project',
    component: ProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewprojects',
    component: ViewprojectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addproject',
    component: AddprojectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'deleteproject',
    component: DeleteprojectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'updateproject',
    component: UpdateprojectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewbacklogs',
    component: ViewbacklogsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projecttask',
    component: ProjecttaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewprojecttasks',
    component: ViewprojecttasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addprojecttask',
    component: AddprojecttaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'deleteprojecttask',
    component: DeleteprojecttaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'updateprojecttask',
    component: UpdateprojecttaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewTaskByIdentifier',
    component: ViewtaskbyidentiComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
