import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'tasks',
    pathMatch:'full'
  },
  {
    path:'tasks',
    component:TaskListComponent
  },
  {
    path:'task-add',
    component:AddTaskComponent,
    canActivate:[authGuard]
  },
  {
    path:"**" ,
    redirectTo:"tasks"
  }
];
