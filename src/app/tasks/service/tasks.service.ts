import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Tasks} from "../model/tasks";
import {HttpClient} from "@angular/common/http";
import {Environment} from "src/env/env";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private urlApi: string;
  public collection$: BehaviorSubject<Tasks[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = Environment.urlApi;
    this.collection$ = new BehaviorSubject<Tasks[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(){
    this.httpClient.get<Tasks[]>(`${this.urlApi}/tasks`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  public add(task: Tasks): Observable<Tasks>{
    return this.httpClient.post<Tasks>(`${this.urlApi}/tasks`, task);
  }
}
