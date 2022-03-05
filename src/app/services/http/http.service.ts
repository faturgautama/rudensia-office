import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotificationService } from '../notification/notification.service';
import { UtilityService } from '../utility/utility.service';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private httpHeader: any;

    constructor(
        private httpClient: HttpClient,
        private utilityService: UtilityService,
    ) {
        this.httpHeader = new HttpHeaders();
        this.httpHeader = this.httpHeader.set('Content-Type', 'application/json');
    }

    defaultGetRequest(url: string): Observable<any> {
        return this.httpClient.get<any>(
            url,
            {
                headers: this.httpHeader
            }
        ).pipe(
            catchError(this.handlingError),
            map((result: { [key: string]: any }) => {
                let data = [];

                for (let key in result) {
                    if (result.hasOwnProperty(key)) {
                        data.push({ ...result[key], id: key })
                    }
                };

                return data;
            })
        )
    }

    defaultGetByIdRequest(url: string): Observable<any> {
        return this.httpClient.get<any>(
            url,
            {
                headers: this.httpHeader
            }
        )
    }

    defaultPostRequest(url: string, params: any, showToasts?: boolean): Observable<any> {
        return this.httpClient.post<any>(
            url,
            params,
            {
                headers: this.httpHeader
            }
        ).pipe(
            catchError(this.handlingError),
            map((result) => {
                return result;
            })
        );
    }

    defaultDeleteRequest(url: string, showToasts?: boolean): Observable<any> {
        return this.httpClient.delete<any>(
            url,
            {
                headers: this.httpHeader
            }
        ).pipe(
            catchError(this.handlingError),
            map((result) => {
                return result;
            })
        );
    }

    defaultPutRequest(url: string, params: any, showToasts?: boolean): Observable<any> {
        return this.httpClient.put<any>(
            url,
            {
                headers: this.httpHeader
            }
        ).pipe(
            catchError(this.handlingError),
            map((result) => {
                return result;
            })
        );
    }

    defaultPatchRequest(url: string, params: any): Observable<any> {
        return this.httpClient.patch<any>(
            url,
            params,
            {
                headers: this.httpHeader
            }
        ).pipe(
            catchError(this.handlingError),
            map((result) => {
                return result;
            })
        );
    }

    private handlingError(httpErrorResponse: HttpErrorResponse): any {
        let pesanError = 'An Error Occured';

        if (httpErrorResponse.error.error.message) {
            pesanError = httpErrorResponse.error.error.message;

            pesanError = pesanError.replace(/_/g, " ");

            if (pesanError === 'TOKEN EXPIRED') {

            }

            return throwError(pesanError);
        };

        if (!httpErrorResponse.error.error.message) {
            return throwError(pesanError);
        };
    }
}
