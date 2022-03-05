import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
    selector: 'app-atom-navbar',
    templateUrl: './atom-navbar.component.html',
    styleUrls: ['./atom-navbar.component.css']
})
export class AtomNavbarComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit(): void {
    }

    onSignOut(): void {
        this.authenticationService.onSignOut();
    }
}
