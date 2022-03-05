import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    PageTitle = new BehaviorSubject("");

    constructor(
        private router: Router,
    ) { }

    onNavigateToPage(routingUrl: string): void {
        this.router.navigateByUrl(routingUrl);
    };

    onSetTitlePage(title: string): void {
        this.PageTitle.next(title);
    };
}
