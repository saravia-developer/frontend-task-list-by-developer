import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateCategory } from '../interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly url = 'http://localhost:3001'
  private readonly table = 'category'

  constructor(
    private http: HttpClient
  ) {}

  getCategory() {
    return this.http.get(`${this.url}/${this.table}`)
  }

  createCategory(body: ICreateCategory) {
    return this.http.post(`${this.url}/${this.table}/create`, body)
  }
}
