import {Component, Input} from '@angular/core';
import {TasksService} from "../../../tasks/service/tasks.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() public collection!: any;
  getIcons: boolean;

  constructor(private service: TasksService) {
    this.getIcons = false;
  }

  public deleteTask(id: number){
    this.service.delete(id).subscribe();
  }
}
