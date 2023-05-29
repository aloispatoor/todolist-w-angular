import {Component} from '@angular/core';
import {Tasks} from "../../model/tasks";
import {TasksService} from "../../service/tasks.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-page-list-tasks',
  templateUrl: './page-list-tasks.component.html',
  styleUrls: ['./page-list-tasks.component.css']
})
export class PageListTasksComponent {
  public collection$!: BehaviorSubject<Tasks[]>;
  // public id: number;
  // public item$: Observable<Tasks>;

  constructor(private service: TasksService){
    this.collection$ = this.service.collection$;
    this.service.refreshCollection();
  }

  // public setIsDone(id: number): void{
  //   const task : Tasks = this.item$.id;
  //   if(task.isDone === false){
  //     task.isDone = true;
  //   } else {
  //     task.isDone = false;
  //   }
  // }


}
