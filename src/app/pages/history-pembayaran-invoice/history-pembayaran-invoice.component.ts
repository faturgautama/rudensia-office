import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { map } from 'rxjs/operators';
import { IInvoiceAirModel } from 'src/app/models/invoice-air.model';
import { HistoryPembayaranInvoiceService } from 'src/app/services/history-pembayaran-invoice/history-pembayaran-invoice.service';
import { InvoiceAirService } from 'src/app/services/invoice-air/invoice-air.service';
import { SetupCustomerService } from 'src/app/services/setup-data/setup-customer.service';

@Component({
    selector: 'app-history-pembayaran-invoice',
    templateUrl: './history-pembayaran-invoice.component.html',
    styleUrls: ['./history-pembayaran-invoice.component.css']
})
export class HistoryPembayaranInvoiceComponent implements OnInit {

    InvoiceSudahLunas: IInvoiceAirModel[];

    FormFilterPencarian: FormGroup;

    @ViewChild('DropdownCustomer') DropdownCustomer: DropDownListComponent;
    DropdownCustomerField = { text: 'nama_customer', value: 'id' };

    @ViewChild('DropdownBulan') DropdownBulan: DropDownListComponent;
    DropdownBulanField = { text: 'bulan', value: 'id' };
    DropdownBulanDatasource: any[];

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        public setupCustomerService: SetupCustomerService,
        private historyPembayaranService: HistoryPembayaranInvoiceService,
    ) { }

    ngOnInit(): void {
        // ** Get All Customer
        this.setupCustomerService.onGetAllDataCustomer();

        // ** Set Dropdown Bulan Datasource
        this.onSetDropdownBulanDatasource();

        // ** Call Get All Invoice
        this.onGetAllInvoice();

        // ** Set Form Filter Pencarian Attributes
        this.onSetFormFilterPencarian();
    }

    onGetAllInvoice(): void {
        this.historyPembayaranService.onGetAllInvoiceSudahLunas()
            .subscribe((result) => {
                if (result) {
                    this.InvoiceSudahLunas = result;
                }
            })
    }

    onSetDropdownBulanDatasource(): void {
        this.DropdownBulanDatasource = [
            { id: 1, bulan: 'January' },
            { id: 2, bulan: 'Februari' },
            { id: 3, bulan: 'Maret' },
            { id: 4, bulan: 'April' },
            { id: 5, bulan: 'Mei' },
            { id: 6, bulan: 'Juni' },
            { id: 7, bulan: 'Juli' },
            { id: 8, bulan: 'Agustus' },
            { id: 9, bulan: 'September' },
            { id: 10, bulan: 'Oktober' },
            { id: 11, bulan: 'November' },
            { id: 12, bulan: 'Desember' },
        ];
    }

    onSetFormFilterPencarian(): void {
        this.FormFilterPencarian = this.formBuilder.group({
            id_customer: ['', []],
            id_bulan: [0, []],
        });
    }

    handleClickItemInvoice(item: IInvoiceAirModel): void {
        this.router.navigate(['/payment-invoice', item.id]);
    }

    handleClickButtonFilterPencarian(FormFilterPencarian: any): void {
        this.onGetAllInvoice();

        let id_customer = "";
        if (FormFilterPencarian.id_customer) {
            id_customer = FormFilterPencarian.id_customer;
        };

        let id_bulan = 0;
        if (FormFilterPencarian.id_bulan > 0) {
            id_bulan = FormFilterPencarian.id_bulan;
        };

        this.historyPembayaranService.onGetAllInvoiceSudahLunas()
            .pipe(
                map((result) => {
                    let data = result.filter((item) => {
                        if (id_customer != "" && id_bulan < 1) {
                            return item.id_customer == id_customer;
                        };

                        if (id_bulan > 0 && id_customer == "") {
                            return item.id_bulan == id_bulan;
                        };

                        if (id_customer != "" && id_bulan > 0) {
                            return item.id_customer == id_customer && item.id_bulan == id_bulan;
                        };

                        if (id_customer == "" && id_bulan < 1) {
                            return item;
                        }
                    });

                    return data;
                })
            )
            .subscribe((result) => {
                if (result) {
                    this.InvoiceSudahLunas = result;

                    let btnCloseOffcanvas = document.getElementById('btnCloseOffcanvas') as HTMLElement;
                    btnCloseOffcanvas.click();
                }
            })
    }

    get id_customer(): AbstractControl { return this.FormFilterPencarian.get('id_customer'); }
    get id_bulan(): AbstractControl { return this.FormFilterPencarian.get('id_bulan'); }
}
