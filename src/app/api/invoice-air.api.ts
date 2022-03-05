import { environment } from "src/environments/environment";

export const POST_SAVE_INVOICE_AIR = `${environment.firebaseWebApiUrl}InvoiceAir.json`;
export const GET_ALL_INVOICE_AIR = `${environment.firebaseWebApiUrl}InvoiceAir.json`;
export const GET_INVOICE_AIR_BY_ID = `${environment.firebaseWebApiUrl}InvoiceAir/`;
export const PUT_UPDATE_STATUS_INVOICE_AIR = `${environment.firebaseWebApiUrl}InvoiceAir/`;

export const POST_SAVE_PAYMENT_INVOICE = `${environment.firebaseWebApiUrl}PaymentInvoice.json`;
export const GET_ALL_PAYMENT_INVOICE = `${environment.firebaseWebApiUrl}PaymentInvoice.json`;