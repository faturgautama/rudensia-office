import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SignInResponseModel } from "src/app/models/authentication.model";

@Injectable()
export class FirebaseTokenInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const userData: SignInResponseModel = JSON.parse(localStorage.getItem("userData"));

        if (!userData) {
            return next.handle(request);
        };

        if (userData) {
            let modifiedRequest = request.clone({
                params: new HttpParams().set('auth', userData.idToken)
            });

            return next.handle(modifiedRequest);
        };
    }
}