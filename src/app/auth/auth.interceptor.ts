import {tap} from 'rxjs/operators';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') === 'True') {
      return next.handle(req.clone());
    }

    if (localStorage.getItem('token') !== null) {
      const clonedReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' +
          localStorage.getItem('token'))
      });
      return next.handle(clonedReq).pipe(tap());

    } else {
      this.router.navigateByUrl('/sign-in');
    }
  }
}
