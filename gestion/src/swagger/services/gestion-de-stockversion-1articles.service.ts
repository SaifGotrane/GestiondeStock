/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
@Injectable({
  providedIn: 'root',
})
class GestionDeStockversion1articlesService extends __BaseService {
  static readonly findAllArticlePath = '/GestionDeStock/version1article/all';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des articles
   *
   * Cette methode permet de chercher et renvoyer la liste des articles qui existent dans la BDD
   * @return La liste des article / Une liste vide
   */
  findAllArticleResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1article/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des articles
   *
   * Cette methode permet de chercher et renvoyer la liste des articles qui existent dans la BDD
   * @return La liste des article / Une liste vide
   */
  findAllArticle(): __Observable<Array<ArticleDto>> {
    return this.findAllArticleResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }
}

module GestionDeStockversion1articlesService {
}

export { GestionDeStockversion1articlesService }
