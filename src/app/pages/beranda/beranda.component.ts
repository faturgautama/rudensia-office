import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
    selector: 'app-beranda',
    templateUrl: './beranda.component.html',
    styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

    Menu: any[];

    UserDisplayName: string;

    constructor(
        private navigationService: NavigationService
    ) { }

    ngOnInit(): void {
        this.onSetMenuProperties();

        let userData = JSON.parse(localStorage.getItem('userData'));

        this.UserDisplayName = userData.displayName;
    }

    onSetMenuProperties(): void {
        this.Menu = [
            {
                Id: 'Setup-Customer',
                Caption: 'Setup Customer',
                Url: 'setup-customer'
            },
            {
                Id: 'Invoice-Air',
                Caption: 'Buat Invoice',
                Url: 'invoice-air'
            },
            {
                Id: 'Pembayaran-Invoice',
                Caption: 'Payment Invoice',
                Url: 'pembayaran-invoice'
            },
            {
                Id: 'Riwayat-Pembayaran',
                Caption: 'Riwayat Payment',
                Url: 'riwayat-pembayaran'
            },
        ];
    }

    onClickCardMenu(item: any): void {
        this.navigationService.onNavigateToPage(item.Url);
    }
}
