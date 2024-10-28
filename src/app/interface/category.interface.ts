interface Category {
  nameCategory: string
}

export interface ICreateCategory extends Category {}
export interface IUpdateCategory extends Category {}


export interface ICategoryFromDB {
  category_id: number
  name_category: string
}
