import {Component, Input} from '@angular/core';
import {TasksService} from "../../../tasks/service/tasks.service";
import {Tasks} from "../../../tasks/model/tasks";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() public collection!: any;
  getIcons: null;

  constructor(private service: TasksService) {
    this.getIcons = null;
  }

  public enter(i: any){
    this.getIcons = i;
  }
  public leave(i: any){
    this.getIcons = null;
  }

  public deleteTask(id: number){
    this.service.delete(id).subscribe();
  }

  public isDone(task: Tasks){
    this.service.isDone(task);
  }
}
