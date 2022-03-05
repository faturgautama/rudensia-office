import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
import { filter } from 'rxjs/operators';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'Company Profile Template';

    ShowNavbar: boolean = false;

    constructor(
        private router: Router,
        private titleService: Title,
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService,
    ) { }

    ngOnInit(): void {
        AOS.init();

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        ).subscribe(() => {
            const routeData = this.getChild(this.activatedRoute);

            routeData.data.subscribe((data: any) => {
                localStorage.setItem('PageTitle', data.title);

                this.navigationService.onSetTitlePage(data.title);

                this.titleService.setTitle(data.title);
            })
        });
    }

    getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        } else {
            return activatedRoute;
        }
    }
}
