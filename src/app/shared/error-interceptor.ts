import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { throwError, Subject } from "rxjs";
import { catchError } from 'rxjs/operators';

export class ErrorInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    );
  }
}
