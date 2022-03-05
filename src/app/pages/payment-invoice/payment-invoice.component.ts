import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PrintInvoiceComponent } from 'src/app/components/print/print-invoice/print-invoice.component';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { InvoiceAirService } from 'src/app/services/invoice-air/invoice-air.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
    selector: 'app-payment-invoice',
    templateUrl: './payment-invoice.component.html',
    styleUrls: ['./payment-invoice.component.css']
})
export class PaymentInvoiceComponent implements OnInit {

    FormPayment: FormGroup;

    IdInvoice: string;

    @ViewChild('PrintInvoice') PrintInvoice: PrintInvoiceComponent;

    DataInvoice: any;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService,
        private invoiceAirService: InvoiceAirService,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.onSetFormPaymentAttributes();

        // ** Get Route Param
        this.onGetRouteParam();

        this.authenticationService.onGetCurrentUser();
    }

    onGetRouteParam(): void {
        this.activatedRoute.params
            .subscribe((result) => {
                this.IdInvoice = result.id;

                this.onGetDetailInvoice(this.IdInvoice);
            });
    }

    onGetDetailInvoice(Id: string): void {
        this.invoiceAirService.onGetInvoiceById(Id)
            .subscribe((result) => {
                result.id_invoice = Id;
                result.no_ref = "";
                this.FormPayment.setValue(result);
                this.DataInvoice = result;
                this.onGetTunggakanCustomer(result.id_customer, result.id_bulan_tagihan);
            })
    }

    onSetFormPaymentAttributes(): void {
        this.FormPayment = this.formBuilder.group({
            id_invoice: ["", []],
            id_customer: ["", []],
            nama_customer: ["", []],
            no_kavling: ["", []],
            no_pelanggan_customer: ["", []],
            id_bulan_tagihan: [0, []],
            tanggal_tagihan: ["", []],
            jumlah_pemakaian_awal: [0, []],
            jumlah_pemakaian_akhir: [0, []],
            jumlah_iuran_sampah: [20000, []],
            subtotal: [0, []],
            status: [false, []],
            user_input: ["", []],
            time_input: ["", []],
            no_ref: ["", []]
        });
    }

    onSubmitFormPayment(FormPayment: any): void {
        let UserData = this.authenticationService.UserData.value;

        FormPayment.status = true;
        FormPayment.user_input = UserData.displayName;
        FormPayment.time_input = this.utilityService.onFormatDate(new Date());

        this.invoiceAirService.onSubmitPaymentInvoice(FormPayment)
            .pipe(
                map((result) => {
                    if (result) {
                        this.invoiceAirService.onUpdateStatusInvoiceAfterPayment(FormPayment.id_invoice)
                            .subscribe((result) => {
                                console.log(result);
                            });

                        return result;
                    }
                })
            )
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowCustomToast('success', 'Payment Success')
                        .then(() => {
                            this.navigationService.onNavigateToPage('pembayaran-invoice');
                        })
                }
            });
    }

    onPrintInvoice(data: any): void {
        this.PrintInvoice.onPrintInvoice();
    }

    onGetTunggakanCustomer(CustomerId: string, currentDateInvoice: number): void {
        this.invoiceAirService.onGetAllInvoiceByIdCustomer(CustomerId)
            .pipe(
                map((result) => {
                    let data = result.filter((item) => {
                        return item.id_bulan_tagihan < currentDateInvoice;
                    });

                    return data;
                })
            )
            .subscribe((result) => {
                this.DataInvoice.tunggakan = result;
            });
    }

    get id_invoice(): AbstractControl { return this.FormPayment.get('id_invoice'); }
    get id_customer(): AbstractControl { return this.FormPayment.get('id_customer'); }
    get nama_customer(): AbstractControl { return this.FormPayment.get('nama_customer'); }
    get no_kavling(): AbstractControl { return this.FormPayment.get('no_kavling'); }
    get no_pelanggan_customer(): AbstractControl { return this.FormPayment.get('no_pelanggan_customer'); }
    get id_bulan_tagihan(): AbstractControl { return this.FormPayment.get('id_bulan_tagihan'); }
    get tanggal_tagihan(): AbstractControl { return this.FormPayment.get('tanggal_tagihan'); }
    get jumlah_pemakaian_awal(): AbstractControl { return this.FormPayment.get('jumlah_pemakaian_awal'); }
    get jumlah_pemakaian_akhir(): AbstractControl { return this.FormPayment.get('jumlah_pemakaian_akhir'); }
    get jumlah_iuran_sampah(): AbstractControl { return this.FormPayment.get('jumlah_iuran_sampah'); }
    get subtotal(): AbstractControl { return this.FormPayment.get('subtotal'); }
    get user_input(): AbstractControl { return this.FormPayment.get('user_input'); }
    get time_input(): AbstractControl { return this.FormPayment.get('time_input'); }
    get no_ref(): AbstractControl { return this.FormPayment.get('no_ref'); }
}
