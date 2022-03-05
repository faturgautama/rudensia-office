import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SignInResponseModel } from 'src/app/models/authentication.model';
import * as API from '../../api';
import { HttpService } from '../http/http.service';
import { UtilityService } from '../utility/utility.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private API = API.API.AUTHENTICATION;

    UserData: BehaviorSubject<SignInResponseModel>;

    constructor(
        private router: Router,
        private httpService: HttpService,
        private utilityService: UtilityService
    ) { }

    onGetCurrentUser(): void {
        let userData: SignInResponseModel = JSON.parse(localStorage.getItem('userData'));
        this.UserData = new BehaviorSubject(userData);
    }

    onRegister(email: string, password: string, displayName: string): Observable<any> {
        return this.httpService.defaultPostRequest(
            this.API.REGISTER,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            tap((result) => {
                this.handlingSignIn(result);

                this.updateProfile(result.idToken, displayName)
                    .subscribe((result) => {
                        // console.log(result);
                    });
            })
        )
    }

    updateProfile(idToken: string, displayName: string) {
        return this.httpService.defaultPostRequest(
            this.API.UPDATE_PROFILE,
            {
                idToken: idToken,
                displayName: displayName,
                returnSecureToken: true,
            }
        );
    }

    onSignIn(email: string, password: string): Observable<SignInResponseModel> {
        return this.httpService.defaultPostRequest(
            this.API.SIGN_IN,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError((error: string): any => {
                this.utilityService.onShowCustomToast('error', error);
            }),
            map((result) => {
                this.handlingSignIn(result);
                return result;
            })
        )
    }

    onSignOut(): void {
        this.utilityService.onShowCustomToast('success', 'Sign Out Success')
            .then(() => {
                localStorage.clear();
                this.router.navigateByUrl('');
            })
    }

    private handlingSignIn(data: SignInResponseModel): void {
        // ** Set local storage
        localStorage.setItem('userData', JSON.stringify(data));
    }
}
