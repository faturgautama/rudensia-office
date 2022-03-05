import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { HistoryPembayaranInvoiceComponent } from './pages/history-pembayaran-invoice/history-pembayaran-invoice.component';
import { InvoiceAirComponent } from './pages/invoice-air/invoice-air.component';
import { PaymentInvoiceComponent } from './pages/payment-invoice/payment-invoice.component';
import { PembayaranInvoiceComponent } from './pages/pembayaran-invoice/pembayaran-invoice.component';
import { SetupCustomerComponent } from './pages/setup-data/setup-customer/setup-customer.component';

const routes: Routes = [
    { path: "", component: AuthenticationComponent, data: { title: "Sign In" } },
    { path: "beranda", component: BerandaComponent, data: { title: "Beranda" } },
    { path: "setup-customer", component: SetupCustomerComponent, data: { title: "Setup Customer" } },
    { path: "invoice-air", component: InvoiceAirComponent, data: { title: "Buat Invoice" } },
    { path: "pembayaran-invoice", component: PembayaranInvoiceComponent, data: { title: "Pembayaran Invoice" } },
    { path: "payment-invoice/:id", component: PaymentInvoiceComponent, data: { title: "Payment Invoice" } },
    { path: "riwayat-pembayaran", component: HistoryPembayaranInvoiceComponent, data: { title: "Riwayat Payment" } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
