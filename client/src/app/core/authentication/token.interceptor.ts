import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CredentialService } from './credential.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public credentialService: CredentialService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (!/authenticate$/i.test(request.url)) {
        request = request.clone({
            setHeaders: {
              token: `${this.credentialService.getToken()}`
            }
          });
    }

    return next.handle(request);
  }
}