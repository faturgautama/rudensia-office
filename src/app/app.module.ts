import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { environment } from '../environments/environment';
import { FirebaseTokenInterceptor } from './helper/interceptors/firebase.interceptor';

import { AppComponent } from './app.component';
import { AtomNavbarComponent } from './components/atoms/atom-navbar/atom-navbar.component';
import { AtomHeadingTextComponent } from './components/atoms/atom-heading-text/atom-heading-text.component';
import { AtomSubheadingTextComponent } from './components/atoms/atom-subheading-text/atom-subheading-text.component';
import { AtomButtonBiruComponent } from './components/atoms/atom-button-biru/atom-button-biru.component';
import { AtomButtonAbuComponent } from './components/atoms/atom-button-abu/atom-button-abu.component';
import { AtomErrorAlertComponent } from './components/atoms/atom-error-alert/atom-error-alert.component';
import { AtomsStaticNavbarComponent } from './components/atoms/atoms-static-navbar/atoms-static-navbar.component';
import { MolCardLayoutComponent } from './components/molecules/mol-card-layout/mol-card-layout.component';
import { MolCardComponent } from './components/molecules/mol-card/mol-card.component';

import { BerandaComponent } from './pages/beranda/beranda.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { SetupCustomerComponent } from './pages/setup-data/setup-customer/setup-customer.component';
import { SetupDataComponent } from './pages/setup-data/setup-data/setup-data.component';
import { InvoiceAirComponent } from './pages/invoice-air/invoice-air.component';
import { PembayaranInvoiceComponent } from './pages/pembayaran-invoice/pembayaran-invoice.component';
import { HistoryPembayaranInvoiceComponent } from './pages/history-pembayaran-invoice/history-pembayaran-invoice.component';
import { PaymentInvoiceComponent } from './pages/payment-invoice/payment-invoice.component';
import { PrintInvoiceComponent } from './components/print/print-invoice/print-invoice.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
    declarations: [
        AppComponent,
        AtomNavbarComponent,
        AtomHeadingTextComponent,
        AtomSubheadingTextComponent,
        AtomButtonBiruComponent,
        AtomButtonAbuComponent,
        AtomErrorAlertComponent,
        MolCardComponent,
        MolCardLayoutComponent,
        BerandaComponent,
        AuthenticationComponent,
        SetupCustomerComponent,
        SetupDataComponent,
        AtomsStaticNavbarComponent,
        InvoiceAirComponent,
        PembayaranInvoiceComponent,
        HistoryPembayaranInvoiceComponent,
        PaymentInvoiceComponent,
        PrintInvoiceComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        DropDownListModule,
        NumericTextBoxModule,
        DatePickerModule,
        NgxPrintModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: FirebaseTokenInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
