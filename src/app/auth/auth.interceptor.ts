import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ClientService} from '../_service/client.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private clientSer: ClientService, private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (req.headers.get('noauth')) {
      return next.handle(req.clone());
    } else {
      console.log('token', this.clientSer.getToken());
      const clonedreq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.clientSer.getToken())
      });
      return next.handle(clonedreq).pipe(
        tap(
          event => {
          },
          err => {
            if (err.error.auth === false) {
              this.router.navigateByUrl('/login');
            }
          })
      );
    }
  }
}
