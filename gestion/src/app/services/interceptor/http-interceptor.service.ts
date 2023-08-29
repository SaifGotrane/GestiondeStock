import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from "src/app/composants/loader/service/loader.service"; // Assurez-vous d'importer correctement votre service de chargement

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {} // Assurez-vous que vous avez injecté le service correctement

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    let authenticationResponse: AuthenticatorResponse ;

    if (localStorage.getItem('accessToken')) {
      authenticationResponse = JSON.parse(localStorage.getItem('accessToken') as string);

      const authReq = req.clone({
        headers: new HttpHeaders({
       //   Authorization: 'Bearer ' + authenticationResponse.accessToken
        })
      });

      return this.handleRequest(authReq, next);
    }

    return this.handleRequest(req, next);
  }

  handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        tap(
            (event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                this.loaderService.hide();
              }
            },
            (err: any) => {
              this.loaderService.hide();
            }
        )
    );
  }
}
