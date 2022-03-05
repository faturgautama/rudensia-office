import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { BehaviorSubject } from 'rxjs';
import { IInvoiceAirModel } from 'src/app/models/invoice-air.model';
import { ISetupCustomerModel } from 'src/app/models/setup-data.model';
import { SetupCustomerService } from 'src/app/services/setup-data/setup-customer.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { InvoiceAirService } from 'src/app/services/invoice-air/invoice-air.service';

@Component({
    selector: 'app-invoice-air',
    templateUrl: './invoice-air.component.html',
    styleUrls: ['./invoice-air.component.css']
})
export class InvoiceAirComponent implements OnInit {

    FormInvoiceAir: FormGroup;

    @ViewChild('DropdownCustomer') DropdownCustomer: DropDownListComponent;
    DropdownCustomerField = { text: 'nama_customer', value: 'id' };

    SelectedCustomer: ISetupCustomerModel;

    @ViewChild('DropdownBulan') DropdownBulan: DropDownListComponent;
    DropdownBulanField = { text: 'bulan', value: 'id' };
    DropdownBulanDatasource: any[];

    @ViewChild('JumlahPemakaianAwal') JumlahPemakaianAwal: NumericTextBoxComponent;
    JumlahPemakaianAwalSubject = new BehaviorSubject(0);

    @ViewChild('JumlahPemakaianAkhir') JumlahPemakaianAkhir: NumericTextBoxComponent;
    JumlahPemakaianAkhirSubject = new BehaviorSubject(0);

    @ViewChild('TagihanIuranSampah') TagihanIuranSampah: NumericTextBoxComponent;

    @ViewChild('SubtotalTagihan') SubtotalTagihan: NumericTextBoxComponent;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private invoiceAirService: InvoiceAirService,
        public setupCustomerService: SetupCustomerService,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.FormInvoiceAir = this.formBuilder.group({
            id_customer: ["", []],
            nama_customer: ["", []],
            no_kavling: ["", []],
            no_pelanggan_customer: ["", []],
            tanggal_tagihan: ["", []],
            jumlah_pemakaian_awal: [0, []],
            jumlah_pemakaian_akhir: [0, []],
            jumlah_iuran_sampah: [20000, []],
            subtotal: [0, []],
            status: [false, []],
            user_input: ["", []],
            time_input: ["", []],
        });

        // ** Get All Customer
        this.onGetAllCustomer();

        this.authenticationService.onGetCurrentUser();
    };

    onGetAllCustomer(): void {
        this.setupCustomerService.onGetAllDataCustomer();
    };

    onChangeDropdownCustomer(args: any): void {
        this.SelectedCustomer = args.itemData;
        this.nama_customer.setValue(this.SelectedCustomer.nama_customer);
        this.no_kavling.setValue(this.SelectedCustomer.no_kavling);
        this.no_pelanggan_customer.setValue(this.SelectedCustomer.no_pelanggan_customer);
    };

    handleChangePemakaianAwal(JumlahPemakaianAwal: number): void {
        this.JumlahPemakaianAwalSubject.next(JumlahPemakaianAwal);

        this.onCountSubtotal();
    };

    handleChangePemakaianAkhir(JumlahPemakaianAkhir: number): void {
        this.JumlahPemakaianAkhirSubject.next(JumlahPemakaianAkhir);

        this.onCountSubtotal();
    };

    onCountSubtotal(): void {
        let total_pemakaian = this.JumlahPemakaianAkhirSubject.value - this.JumlahPemakaianAwalSubject.value;

        let sub_total = total_pemakaian > 0 ? ((3500 * total_pemakaian) + 7500) : 0;

        this.subtotal.setValue(sub_total + this.jumlah_iuran_sampah.value);
    };

    handleSubmitFormInvoice(FormInvoiceAir: IInvoiceAirModel): void {
        let UserData = this.authenticationService.UserData.value;

        FormInvoiceAir.tanggal_tagihan = this.utilityService.onFormatDate(FormInvoiceAir.tanggal_tagihan);
        FormInvoiceAir.id_bulan_tagihan = parseInt(this.utilityService.onFormatDate(FormInvoiceAir.tanggal_tagihan, 'MM'));
        FormInvoiceAir.user_input = UserData.displayName;
        FormInvoiceAir.time_input = this.utilityService.onFormatDate(new Date());

        this.invoiceAirService.onSubmitInvoiceAir(FormInvoiceAir)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowCustomToast('success', 'Invoice Saved')
                        .then(() => {
                            this.onResetFormInvoice();
                        });
                };
            });
    };

    onResetFormInvoice(): void {
        this.FormInvoiceAir.reset();
        this.id_customer.setValue("");
        this.DropdownCustomer.value = null;
        this.nama_customer.setValue("");
        this.no_kavling.setValue("");
        this.no_pelanggan_customer.setValue("");
        this.tanggal_tagihan.setValue("");
        this.jumlah_pemakaian_awal.setValue(0);
        this.jumlah_pemakaian_akhir.setValue(0);
        this.jumlah_iuran_sampah.setValue(20000);
        this.subtotal.setValue(0);
        this.user_input.setValue("");
        this.time_input.setValue("");
    };

    get id_customer(): AbstractControl { return this.FormInvoiceAir.get('id_customer'); }
    get nama_customer(): AbstractControl { return this.FormInvoiceAir.get('nama_customer'); }
    get no_kavling(): AbstractControl { return this.FormInvoiceAir.get('no_kavling'); }
    get no_pelanggan_customer(): AbstractControl { return this.FormInvoiceAir.get('no_pelanggan_customer'); }
    get tanggal_tagihan(): AbstractControl { return this.FormInvoiceAir.get('tanggal_tagihan'); }
    get jumlah_pemakaian_awal(): AbstractControl { return this.FormInvoiceAir.get('jumlah_pemakaian_awal'); }
    get jumlah_pemakaian_akhir(): AbstractControl { return this.FormInvoiceAir.get('jumlah_pemakaian_akhir'); }
    get jumlah_iuran_sampah(): AbstractControl { return this.FormInvoiceAir.get('jumlah_iuran_sampah'); }
    get subtotal(): AbstractControl { return this.FormInvoiceAir.get('subtotal'); }
    get user_input(): AbstractControl { return this.FormInvoiceAir.get('user_input'); }
    get time_input(): AbstractControl { return this.FormInvoiceAir.get('time_input'); }
}
