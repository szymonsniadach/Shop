import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlInterceptor } from './url.interceptor';
import { ErrorInterceptor } from './error.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];
