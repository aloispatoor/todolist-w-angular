import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Tasks} from "../model/tasks";
import {HttpClient} from "@angular/common/http";
import {Environment} from "src/env/env";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private urlApi: string;
  public collection$: Observable<Tasks[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = Environment.urlApi;
    this.collection$ = this.httpClient.get<Tasks[]>(`${this.urlApi}/tasks`);
  }
}
