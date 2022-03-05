import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { SetupCustomerService } from 'src/app/services/setup-data/setup-customer.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ISetupCustomerModel } from 'src/app/models/setup-data.model';

@Component({
    selector: 'app-setup-customer',
    templateUrl: './setup-customer.component.html',
    styleUrls: ['./setup-customer.component.css']
})
export class SetupCustomerComponent implements OnInit {

    Form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        public setupCustomerService: SetupCustomerService,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        // ** Get All Customer
        this.onGetAllCustomer();

        // ** Call Method Set Form Attributes
        this.onSetFormAttributes();

        // ** Get User Data
        this.onGetUserData();
    }

    onGetAllCustomer(): void {
        this.setupCustomerService.onGetAllDataCustomer();
    }

    onSetFormAttributes(): void {
        this.Form = this.formBuilder.group({
            no_pelanggan_customer: ['', []],
            nama_customer: ['', []],
            no_handphone: ['', []],
            no_kavling: ['', []],
            user_input: ['', []],
            time_input: ['', []],
        });
    }

    onGetUserData(): void {
        this.authenticationService.onGetCurrentUser();

        this.authenticationService.UserData
            .subscribe((result) => {
                this.user_input.setValue(result.email);
            });
    }

    onDeleteCustomer(data: ISetupCustomerModel): void {
        this.setupCustomerService.onDeleteCustomer(data.id)
            .subscribe((result) => {
                this.utilityService.onShowCustomToast('success', 'Customer Deleted')
                    .then(() => {
                        this.onGetAllCustomer();
                    })
            })
    }

    onSubmitDataCustomer(Form: any): void {
        Form.time_input = this.utilityService.onFormatDate(new Date(), 'DD/MM/yyyy HH:mm:ss');

        this.setupCustomerService.onPostSaveDataCustomer(Form)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowCustomToast('success', 'Customer Saved')
                        .then(() => {
                            this.onResetForm();

                            this.onGetAllCustomer();
                        });
                };
            });
    }

    onResetForm(): void {
        this.Form.reset();
        this.no_pelanggan_customer.setValue('');
        this.nama_customer.setValue('');
        this.no_handphone.setValue('');
        this.no_kavling.setValue('');
    }

    get no_pelanggan_customer(): AbstractControl { return this.Form.get('no_pelanggan_customer'); }
    get nama_customer(): AbstractControl { return this.Form.get('nama_customer'); }
    get no_handphone(): AbstractControl { return this.Form.get('no_handphone'); }
    get no_kavling(): AbstractControl { return this.Form.get('no_kavling'); }
    get user_input(): AbstractControl { return this.Form.get('user_input'); }
    get time_input(): AbstractControl { return this.Form.get('time_input'); }
}
