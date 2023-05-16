import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListTasksComponent} from "./pages/page-list-tasks/page-list-tasks.component";
import {PageAddTasksComponent} from "./pages/page-add-tasks/page-add-tasks.component";
import {PageEditTasksComponent} from "./pages/page-edit-tasks/page-edit-tasks.component";
import {PageDeleteTasksComponent} from "./pages/page-delete-tasks/page-delete-tasks.component";

const routes: Routes = [
  { path: '', component: PageListTasksComponent },
  { path: 'add', component:  PageAddTasksComponent },
  { path: 'edit', component: PageEditTasksComponent },
  { path: 'delete', component: PageDeleteTasksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
