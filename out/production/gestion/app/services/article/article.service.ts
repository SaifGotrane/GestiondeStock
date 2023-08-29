import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {Observable, of} from "rxjs";
import {ArticleDto} from "../../../swagger/models/article-dto";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
     private userService: UserService,
  ) { }

 enregistrerArticle(articleDto: ArticleDto): Observable<ArticleDto> {
   return this.enregistrerArticle(articleDto);
  }

  findAllArticles(): Observable<ArticleDto[]> {
   return this.findAllArticles();
  }

   findArticleById(idArticle?: number): Observable<ArticleDto> {
     if(idArticle){
       return this.findArticleById(idArticle);
     }
     return of();
   }

     deleteArticle(idArticle: number): Observable<any> {
       if(idArticle) {
         this.deleteArticle(idArticle);
       }
       return of();
     }

}
