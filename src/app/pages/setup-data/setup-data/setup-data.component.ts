import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
    selector: 'app-setup-data',
    templateUrl: './setup-data.component.html',
    styleUrls: ['./setup-data.component.css']
})
export class SetupDataComponent implements OnInit {

    Menu: any[];

    constructor(
        private navigationService: NavigationService
    ) { }

    ngOnInit(): void {
        this.onSetMenuProperties();
    }

    onSetMenuProperties(): void {
        this.Menu = [
            {
                Id: 'Setup-Customer',
                Caption: 'Setup Customer',
                Url: 'setup-data/setup-customer'
            }
        ];
    }

    onClickCardMenu(item: any): void {
        this.navigationService.onNavigateToPage(item.Url);
    }

}
