import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListTasksComponent } from './pages/page-list-tasks/page-list-tasks.component';
import { PageAddTasksComponent } from './pages/page-add-tasks/page-add-tasks.component';
import { PageEditTasksComponent } from './pages/page-edit-tasks/page-edit-tasks.component';
import { PageDeleteTasksComponent } from './pages/page-delete-tasks/page-delete-tasks.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    PageListTasksComponent,
    PageAddTasksComponent,
    PageEditTasksComponent,
    PageDeleteTasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class TasksModule { }
