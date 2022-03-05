import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as API from '../../api';
import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class HistoryPembayaranInvoiceService {

    API_CONFIG = API;

    constructor(
        private httpService: HttpService
    ) { }

    onGetAllInvoiceSudahLunas(): Observable<any> {
        return this.httpService.defaultGetRequest(this.API_CONFIG.API.INVOICE_AIR.GET_ALL_PAYMENT_INVOICE);
    }
}
