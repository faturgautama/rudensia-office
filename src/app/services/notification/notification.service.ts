import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    toasts: any[] = [];

    constructor() { }

    onShowToast(header: string, body: string, options: string): void {
        this.toasts.push({ header, body, options });

        console.log(this.toasts);
    }

    onRemoveToast(toast: any, index: number): void {
        this.toasts.splice(index, 1);
    }
}
