import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInvoiceAirModel } from 'src/app/models/invoice-air.model';
import { HttpService } from '../http/http.service';
import * as API from '../../api';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InvoiceAirService {

    API_CONFIG = API;

    constructor(
        private httpService: HttpService
    ) { }

    onSubmitInvoiceAir(parameter: IInvoiceAirModel): Observable<any> {
        return this.httpService.defaultPostRequest(
            this.API_CONFIG.API.INVOICE_AIR.POST_SAVE_INVOICE_AIR,
            parameter
        );
    }

    onGetAllInvoice(): Observable<any> {
        return this.httpService.defaultGetRequest(this.API_CONFIG.API.INVOICE_AIR.GET_ALL_INVOICE_AIR)
            .pipe(
                map((result) => {
                    let data = result.filter((item) => {
                        return !item.status;
                    });
                    return data;
                })
            );
    }

    onGetInvoiceById(InvoiceId: string): Observable<any> {
        return this.httpService.defaultGetByIdRequest(`${this.API_CONFIG.API.INVOICE_AIR.GET_INVOICE_AIR_BY_ID}${InvoiceId}.json`);
    }

    onUpdateStatusInvoiceAfterPayment(InvoiceId: string): Observable<any> {
        return this.httpService.defaultPatchRequest(
            `${this.API_CONFIG.API.INVOICE_AIR.PUT_UPDATE_STATUS_INVOICE_AIR}${InvoiceId}.json`,
            { status: true }
        )
    }

    onSubmitPaymentInvoice(parameter: IInvoiceAirModel): Observable<any> {
        return this.httpService.defaultPostRequest(
            this.API_CONFIG.API.INVOICE_AIR.POST_SAVE_PAYMENT_INVOICE,
            parameter
        );
    }

    onGetAllInvoiceByIdCustomer(CustomerId: string): Observable<any> {
        return this.httpService.defaultGetRequest(this.API_CONFIG.API.INVOICE_AIR.GET_ALL_INVOICE_AIR)
            .pipe(
                map((result) => {
                    let data = result.filter((item) => {
                        return !item.status && item.id_customer === CustomerId;
                    });
                    return data;
                })
            );
    }
}
