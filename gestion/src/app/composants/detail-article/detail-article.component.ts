import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit{

 // @Input()
  //articleDto : ArticleDto ={};
  //@Output()
  //suppresionResult = new EventEmitter();
 // selectedIdArticleToDelete ? = -1;

  constructor(
    //  private router: Router,
   //   private articleService: ArticleService
  ) {
  }

  ngOnInit() {
  }

  modifierArticle() {
  //  this.router.navigate(['nouvelarticle', this.articleDto.id]);
  }

  confirmerEtSupprimerArticle():void {
     // if(this.articleDto.id) {
     //   this.articleService.deleteArticle(this.articleDto.id)
     //       .subscribe( res => {
     //         this.suppresionResult.emit('success');
     //       }, error => {
     //         this.suppresionResult.emit(error.error.error);
     //       });
     // }
  }


}
