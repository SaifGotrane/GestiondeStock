import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {LoaderService} from "../../composants/loader/service/loader.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService /*implements HttpInterceptor*/{

  constructor(
      private loaderService: LoaderService
  ) { }

  //intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //    this.loaderService.show();
    // let authenticationResponse: AuthenticatorResponse = {};
    // if (localStorage.getItem('acessToken')) {
    //   authenticationResponse = JSON.parse(
    //     localStorage.getItem('acessToken') as string
    //   );
  // const authReq = req.clone({
  //     headers: new HttpHeaders({
  //         Authorization: 'Bearer ' + authenticationResponse.accessToken
  //     })
  // });
// return this.handleRequest(authReq, next);
// }
// return this.handleRequest(req, next);
 // }
 //
 //  handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>> {
 //    return next.handle(req)
 //        .pipe(tap( event: HttpEvent<any>) => {
 //          if(event instanceof HttpResponse) {
 //            this.loaderService.hide();
 //          }
 //    }, (err: any) => {
 //      this.loaderService.hide();
 //    })
 //  }
}
