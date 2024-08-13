import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICreateTask, IUpdateTask } from '../interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskServicesService {

  private readonly url = 'http://localhost:3000'
  private readonly table = 'task'

  constructor(
    private http: HttpClient
  ) {}

  getTask() {
    return this.http.get(`${this.url}/${this.table}`)
  }

  createTask(body: ICreateTask) {
    return this.http.post(`${this.url}/${this.table}/create`, body)
  }

  // updateTask(id: number, body: IUpdateTask) {
  //   return this.http.patch(`${this.url}/${this.table}/:id`, body)
  // }

  deleteTask(id: number) {
    return this.http.delete(`${this.url}/${this.table}/${id}`);
  }
}
