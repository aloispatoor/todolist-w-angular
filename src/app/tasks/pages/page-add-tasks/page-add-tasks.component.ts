import { Component } from '@angular/core';
import {Tasks} from "../../model/tasks";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TasksService} from "../../service/tasks.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-add-tasks',
  templateUrl: './page-add-tasks.component.html',
  styleUrls: ['./page-add-tasks.component.css']
})
export class PageAddTasksComponent {
  public task: Tasks;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: TasksService, private router: Router) {
    this.task = new Tasks();

    this.form = this.formBuilder.group({
      id: [this.task.id],
      content: [this.task.content],
      isDone: false,
    })
  }

  public onSubmit(){
    this.service.add(this.form.value).subscribe(() => {
      this.router.navigate([`/tasks`]);
      console.log("Task added!");
    })
  }
}
