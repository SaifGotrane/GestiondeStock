import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../../../services/article/article.service";
import {CategoryService} from "../../../services/category/category.service";
import {error} from "ng-packagr/lib/utils/log";

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit{

//  articleDto: ArticleDto = {};
 // categorieDto: CategoryDto = {};
  //listCategorie = Array<CategoryDto> = [];
  errorMsg: Array<string> = [];
  imgUrl: string | ArrayBuffer = 'assets/images/production.png';

  constructor(
    private router:Router,
    //private activatedRoute: ActivatedRoute,
   // private articleService: ArticleService,
  //  private categoryService: CategoryService,
   // private photoService: PhotoService
  ) {
  }

  ngOnInit():void {
   // this.categoryService.findAll()
     //   .subscribe( categories => {
       //   this.listCategorie = categories;
        //});

   // const idArticle = this.activatedRoute.snapshot.params.idArticle;
   //  if(idArticle) {
   //    this.articleService.findArticleById(idArticle)
   //        .subscribe(article => {
   //          this.articleDto = article;
   //          this.categorieDto = this.articleDto ? this.articleDto.category :{};
   //        });
   //  }
  }

  cancel():void {
    this.router.navigate(['articles']);
  }

  // enregistrerArticle():void {
  //    this.articleDto.category = this.categorieDto;
  //   this.articleService.enregistrerArticle(this.articleDto)
  //       .subscribe( art => {
  //         this.router.navigate(['articles']);
  //       }, error => {
  //         this.errorMsg = error.error.errors;
  //       })
  // }
   calculerTTC():void {
  //   if(this.articleDto.prixUnitaireHt && this.articleDto.tauxTva) {
  //     this.articleDto.prixTtc =
  //         +this.articleDto.prixUnitaireHt + (+(this.articleDto.prixUnitaireHt * (this.articleDto.tauxTva / 100)));
  //   }
  }


}
