import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment.development';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const url = environment.apiUrl;
    // const url = '';
    let lang = localStorage.getItem('lang');
    let country = localStorage.getItem('country');
    let language = localStorage.getItem('lang')+ '-' + localStorage.getItem('country');
    let reqCopy = request.clone({
      // url: url + request.url,
      headers: request.headers.set('Access-Control-Allow-Origin', '*'),
    });

    const token = this.authService.getToken();
    if (token) {
      reqCopy = request.clone({
        // url: url + request.url,
        headers: request.headers
          // .set('Content-Type', 'application/json')
          .set('Authorization', token)
          .set('Access-Control-Allow-Origin', '*')
          .set('Accept-Language', language!),
      });
    } else {
      reqCopy = request.clone({
        // url: url + request.url,
        headers: request.headers
          // .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Origin', '*')
          .set('Accept-Language', language!),
      });
    }

    return next.handle(reqCopy);
  }
}
