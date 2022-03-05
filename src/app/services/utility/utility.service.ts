import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import 'moment/locale/id';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor() { }

    onShowCustomAlert(icon: any, title: string, message: string): Promise<any> {
        return Swal.fire({
            icon: icon,
            title: title,
            text: message,
            showCloseButton: false,
            showConfirmButton: true
        });
    }

    onShowCustomToast(icon: any, title: string): Promise<any> {
        return Swal.fire({
            toast: true,
            icon: icon,
            title: title,
            position: 'top-end',
            timer: 2000,
            timerProgressBar: false,
            showCloseButton: true,
            showConfirmButton: false,
            showCancelButton: false,
            width: 300,
            backdrop: true,
            customClass: {
                container: 'mt-3',
                popup: 'p-2'
            }
        });
    }

    onFormatDate(date: Date, format?: string): string {
        moment.locale('id');

        let date_formatted = format ? moment(date).format(format) : moment(date).format();

        return date_formatted;
    }
}
