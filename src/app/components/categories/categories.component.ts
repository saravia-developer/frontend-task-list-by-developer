import { Component } from '@angular/core';
import { ICategoryFromDB } from 'src/app/interface/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories: ICategoryFromDB[] = [];

  constructor(
    private categoryService: CategoryService,
  ){
    this.getCategories()
  }

  getCategories() {
    this.categoryService.getCategory().subscribe({
      next: (result: any) => {
        if(result.success) {
          console.log('Obtención de categorias exitosa');
        }
        console.log(result.response[0]);
        this.categories = result.response[0]
      },
      error: (error) => {
        console.log('Error al obtener las categorias');
        console.error(error);
      }
    })
  }
}
