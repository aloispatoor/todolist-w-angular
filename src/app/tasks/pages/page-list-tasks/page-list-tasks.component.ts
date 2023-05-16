import {Component} from '@angular/core';
import {Tasks} from "../../model/tasks";
import {TasksService} from "../../service/tasks.service";

@Component({
  selector: 'app-page-list-tasks',
  templateUrl: './page-list-tasks.component.html',
  styleUrls: ['./page-list-tasks.component.css']
})
export class PageListTasksComponent {
  public collection!: Tasks[];

  constructor(private service: TasksService){
    this.service.collection$.subscribe((data) => {
      this.collection = data;
      console.log(data);
    })
  }
}
