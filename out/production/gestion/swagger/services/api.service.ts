/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DepotDto } from '../models/depot-dto';
import { ArticleDto } from '../models/article-dto';
import { CategoryDto } from '../models/category-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly homePath = '/';
  static readonly findAllDepotPath = '/GestionDeStock/version1/Depots/all';
  static readonly saveDepotPath = '/GestionDeStock/version1/Depots/create';
  static readonly findByCodeDepotPath = '/GestionDeStock/version1/Depots/filter/{NomDepot}';
  static readonly findByIdDepotPath = '/GestionDeStock/version1/Depots/{idDepot}';
  static readonly saveArticlePath = '/GestionDeStock/version1/article/creat';
  static readonly findAllCatPath = '/GestionDeStock/version1/categories/all';
  static readonly saveCatPath = '/GestionDeStock/version1/categories/create';
  static readonly deleteDepotPath = '/GestionDeStock/version1/categories/delete/{idCategory}';
  static readonly findByCodeCatPath = '/GestionDeStock/version1/categories/filter/{codeCategory}';
  static readonly updateCatPath = '/GestionDeStock/version1/categories/update/{id}';
  static readonly findByIdCatPath = '/GestionDeStock/version1/categories/{idCategory}';
  static readonly findAllUserPath = '/GestionDeStock/version1/utilisateurs/all';
  static readonly saveUserPath = '/GestionDeStock/version1/utilisateurs/create';
  static readonly deleteUserPath = '/GestionDeStock/version1/utilisateurs/delete/{idUtilisateur}';
  static readonly findByEmailUserPath = '/GestionDeStock/version1/utilisateurs/find/{email}';
  static readonly changerMotDePasseUserPath = '/GestionDeStock/version1/utilisateurs/update/password';
  static readonly findByIdUserPath = '/GestionDeStock/version1/utilisateurs/{idUtilisateur}';
  static readonly deleteArticlePath = '/GestionDeStock/version1article/delete/{idArticle}';
  static readonly findByCodeArticlePath = '/GestionDeStock/version1article/{CodeArticle}';
  static readonly findByIdArticlePath = '/GestionDeStock/version1article/{idArticle}';
  static readonly securedPath = '/secured';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  homeResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @return successful operation
   */
  home(): __Observable<string> {
    return this.homeResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @return successful operation
   */
  findAllDepotResponse(): __Observable<__StrictHttpResponse<Array<DepotDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1/Depots/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DepotDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllDepot(): __Observable<Array<DepotDto>> {
    return this.findAllDepotResponse().pipe(
      __map(_r => _r.body as Array<DepotDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveDepotResponse(): __Observable<__StrictHttpResponse<DepotDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GestionDeStock/version1/Depots/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DepotDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  saveDepot(): __Observable<DepotDto> {
    return this.saveDepotResponse().pipe(
      __map(_r => _r.body as DepotDto)
    );
  }

  /**
   * @param NomDepot undefined
   * @return successful operation
   */
  findByCodeDepotResponse(NomDepot: string): __Observable<__StrictHttpResponse<DepotDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1/Depots/filter/${encodeURIComponent(String(NomDepot))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DepotDto>;
      })
    );
  }
  /**
   * @param NomDepot undefined
   * @return successful operation
   */
  findByCodeDepot(NomDepot: string): __Observable<DepotDto> {
    return this.findByCodeDepotResponse(NomDepot).pipe(
      __map(_r => _r.body as DepotDto)
    );
  }

  /**
   * @param idDepot undefined
   * @return successful operation
   */
  findByIdDepotResponse(idDepot: number): __Observable<__StrictHttpResponse<DepotDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1/Depots/${encodeURIComponent(String(idDepot))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DepotDto>;
      })
    );
  }
  /**
   * @param idDepot undefined
   * @return successful operation
   */
  findByIdDepot(idDepot: number): __Observable<DepotDto> {
    return this.findByIdDepotResponse(idDepot).pipe(
      __map(_r => _r.body as DepotDto)
    );
  }

  /**
   * Enregistrer un article
   *
   * Cette methode permet d'enregistrer ou modifier un article
   * @return L'objet article cree / modifie
   */
  saveArticleResponse(): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GestionDeStock/version1/article/creat`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Enregistrer un article
   *
   * Cette methode permet d'enregistrer ou modifier un article
   * @return L'objet article cree / modifie
   */
  saveArticle(): __Observable<ArticleDto> {
    return this.saveArticleResponse().pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllCatResponse(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1/categories/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllCat(): __Observable<Array<CategoryDto>> {
    return this.findAllCatResponse().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveCatResponse(): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GestionDeStock/version1/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  saveCat(): __Observable<CategoryDto> {
    return this.saveCatResponse().pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * @param idCategory undefined
   */
  deleteDepotResponse(idCategory: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/GestionDeStock/version1/categories/delete/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idCategory undefined
   */
  deleteDepot(idCategory: number): __Observable<null> {
    return this.deleteDepotResponse(idCategory).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param codeCategory undefined
   * @return successful operation
   */
  findByCodeCatResponse(codeCategory: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1/categories/filter/${encodeURIComponent(String(codeCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * @param codeCategory undefined
   * @return successful operation
   */
  findByCodeCat(codeCategory: number): __Observable<CategoryDto> {
    return this.findByCodeCatResponse(codeCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  updateCatResponse(id: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/GestionDeStock/version1/categories/update/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  updateCat(id: number): __Observable<CategoryDto> {
    return this.updateCatResponse(id).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * @param idCategory undefined
   * @return successful operation
   */
  findByIdCatResponse(idCategory: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1/categories/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * @param idCategory undefined
   * @return successful operation
   */
  findByIdCat(idCategory: number): __Observable<CategoryDto> {
    return this.findByIdCatResponse(idCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllUserResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllUser(): __Observable<Array<UtilisateurDto>> {
    return this.findAllUserResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveUserResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GestionDeStock/version1/utilisateurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @return successful operation
   */
  saveUser(): __Observable<string> {
    return this.saveUserResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param idUtilisateur undefined
   */
  deleteUserResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/GestionDeStock/version1/utilisateurs/delete/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idUtilisateur undefined
   */
  deleteUser(idUtilisateur: number): __Observable<null> {
    return this.deleteUserResponse(idUtilisateur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param email undefined
   * @return successful operation
   */
  findByEmailUserResponse(email: string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1/utilisateurs/find/${encodeURIComponent(String(email))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param email undefined
   * @return successful operation
   */
  findByEmailUser(email: string): __Observable<UtilisateurDto> {
    return this.findByEmailUserResponse(email).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @return successful operation
   */
  changerMotDePasseUserResponse(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GestionDeStock/version1/utilisateurs/update/password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  changerMotDePasseUser(): __Observable<UtilisateurDto> {
    return this.changerMotDePasseUserResponse().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param idUtilisateur undefined
   * @return successful operation
   */
  findByIdUserResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1/utilisateurs/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param idUtilisateur undefined
   * @return successful operation
   */
  findByIdUser(idUtilisateur: number): __Observable<UtilisateurDto> {
    return this.findByIdUserResponse(idUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Supprimer un article
   *
   * Cette methode permet de supprimer un article par ID
   * @param idArticle undefined
   */
  deleteArticleResponse(idArticle: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/GestionDeStock/version1article/delete/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Supprimer un article
   *
   * Cette methode permet de supprimer un article par ID
   * @param idArticle undefined
   */
  deleteArticle(idArticle: number): __Observable<null> {
    return this.deleteArticleResponse(idArticle).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher un article par CODE
   *
   * Cette methode permet de chercher un article par son CODE
   * @param CodeArticle undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByCodeArticleResponse(CodeArticle: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1article/${encodeURIComponent(String(CodeArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Rechercher un article par CODE
   *
   * Cette methode permet de chercher un article par son CODE
   * @param CodeArticle undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByCodeArticle(CodeArticle: string): __Observable<ArticleDto> {
    return this.findByCodeArticleResponse(CodeArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Rechercher un article par ID
   *
   * Cette methode permet de chercher un article par son ID
   * @param idArticle undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByIdArticleResponse(idArticle: number): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GestionDeStock/version1article/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Rechercher un article par ID
   *
   * Cette methode permet de chercher un article par son ID
   * @param idArticle undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByIdArticle(idArticle: number): __Observable<ArticleDto> {
    return this.findByIdArticleResponse(idArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @return successful operation
   */
  securedResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/secured`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @return successful operation
   */
  secured(): __Observable<string> {
    return this.securedResponse().pipe(
      __map(_r => _r.body as string)
    );
  }
}

module ApiService {
}

export { ApiService }
