import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
    selector: 'app-atoms-static-navbar',
    templateUrl: './atoms-static-navbar.component.html',
    styleUrls: ['./atoms-static-navbar.component.css']
})
export class AtomsStaticNavbarComponent implements OnInit {

    HideNavbar = true;

    HideBackButton = true;

    Title: string;

    @Input('BackUrl') BackUrl: string;

    constructor(
        private location: Location,
        private navigationService: NavigationService,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.navigationService.PageTitle
            .subscribe((result) => {
                if (result == 'Sign In') {
                    this.HideNavbar = true;
                }

                if (result == 'Beranda') {
                    this.HideNavbar = false;
                    this.HideBackButton = true;
                }

                if (result != 'Sign In' && result != 'Beranda') {
                    this.HideNavbar = false;
                    this.HideBackButton = false;
                    this.Title = result;
                }
            });
    }

    onTogglingDropdownUser(): void {
        let dropdown_user = document.getElementById('dropdown_user') as HTMLElement;

        // ** If Have Hide Class
        if (dropdown_user.classList.contains('hide_dropdown_user')) {
            dropdown_user.classList.add('show_dropdown_user');
            dropdown_user.classList.remove('hide_dropdown_user');
        } else {
            dropdown_user.classList.remove('show_dropdown_user');
            dropdown_user.classList.add('hide_dropdown_user');
        };
    }

    onSignOut(): void {
        this.authenticationService.onSignOut();
    }

    onNavigationBack(): void {
        this.navigationService.onNavigateToPage(this.BackUrl);
    }
}
