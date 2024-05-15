import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, ) {}
  // private toaster: ToastrService
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if ([401].includes(err.status)) {
          // auto logout if 401  response returned from api
          // localStorage.clear();
          this.router.navigate(['/login']).then(() => {
            window.location.reload();
          });
        } else if ([403].includes(err.status)) {
          this.router.navigate(['/dashboard']);
        } else if ([404].includes(err.status)) {
          this.router.navigate(['/notFound']);
        } else {
        }
        const error =
          (err && err.error && err.error.message) ||
          (err && err.error && err.error.model) ||
          err.statusText;
        // this.toaster.error(error);
        return throwError(err);
      })
    );
  }
}
