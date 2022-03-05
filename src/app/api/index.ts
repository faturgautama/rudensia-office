import * as AUTHENTICATION from './authentication.api';
import * as SETUP_DATA from './setup-data.api';
import * as INVOICE_AIR from './invoice-air.api';

export const API = Object.assign({}, {
    AUTHENTICATION: AUTHENTICATION,
    SETUP_DATA: SETUP_DATA,
    INVOICE_AIR: INVOICE_AIR,
})