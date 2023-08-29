import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../services/category/category.service";
import {error} from "ng-packagr/lib/utils/log";
import {CategoryDto} from "../../../../swagger/models/category-dto";

@Component({
  selector: 'app-nouvelle-category',
  templateUrl: './nouvelle-category.component.html',
  styleUrls: ['./nouvelle-category.component.scss']
})
export class NouvelleCategoryComponent implements OnInit{

  catgoryDto: CategoryDto = {};
  errorMsg = Array<string>;
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit():void {
    // const idCategory = this.activatedRoute.snapshot.params.idCategory;
    // if(idCategory) {
    //   this.categoryServiceService.findById(idCategory)
    //       .subscribe(cat => {
    //         this.categoryDto = cat;
    //       });
    // }
  }

  cancel():void {
    this.router.navigate(['categories']);

  }

   // enregistrerCategory():void {
   //   this.categoryService.enregistrerCategory(this.catgoryDto)
   //       .subscribe( res => {
   //         this.router.navigate(['categories']);
   //       }, error => {
   //         this.errorMsg = error.error.errors;
   //       });
   // }
}
