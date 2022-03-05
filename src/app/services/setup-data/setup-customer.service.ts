import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISetupCustomerModel } from 'src/app/models/setup-data.model';
import { HttpService } from '../http/http.service';
import { UtilityService } from '../utility/utility.service';
import * as API from '../../api';

@Injectable({
    providedIn: 'root'
})
export class SetupCustomerService {

    API = API.API.SETUP_DATA;

    DataCustomer: BehaviorSubject<ISetupCustomerModel[]>;

    constructor(
        private httpService: HttpService,
        private utilityService: UtilityService,
    ) { }

    onPostSaveDataCustomer(parameter: ISetupCustomerModel): Observable<any> {
        return this.httpService.defaultPostRequest(this.API.POST_SAVE_SETUP_CUSTOMER, parameter);
    }

    onGetAllDataCustomer(): void {
        this.httpService.defaultGetRequest(this.API.GET_ALL_SETUP_CUSTOMER)
            .subscribe((result) => {
                if (result) {
                    this.DataCustomer = new BehaviorSubject(result);
                };
            });
    }

    onDeleteCustomer(CustomerId: string): Observable<any> {
        return this.httpService.defaultDeleteRequest(`${this.API.DELETE_SETUP_CUSTOMER}${CustomerId}.json`);
    }
}
