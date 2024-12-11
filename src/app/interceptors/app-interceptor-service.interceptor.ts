import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptorServiceInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const apiReq = req.clone({
    params: req.params.set('Authorization', 'Bearer ' + token)
  });
  return next(apiReq);
};
