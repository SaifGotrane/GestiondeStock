import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {Observable, of} from "rxjs";
import {CategoryDto} from "../../../swagger/models/category-dto";
import {ApiService} from "../../../swagger/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private userService: UserService,
   private categoryService:ApiService
  ) { }

 // enregistrerCategory(categoryDto: CategoryDto):Observable<CategoryDto>{
   // return this.categoryService.save(categoryDto);
  //}

  findAll(): Observable<Array<CategoryDto>>{
    return this.categoryService.findAllCat();
  }

    findById(idCategory: number):Observable<CategoryDto> {
    return this.categoryService.findByIdCat(idCategory);
}
    delete(idCategorie?: number): Observable<any> {
      if(idCategorie){
     //   return this.categoryService.delete(idCategorie);
      }
      return of();
    }


}
