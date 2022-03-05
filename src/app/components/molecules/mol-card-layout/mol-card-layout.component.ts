import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-mol-card-layout',
    templateUrl: './mol-card-layout.component.html',
    styleUrls: ['./mol-card-layout.component.css']
})
export class MolCardLayoutComponent implements OnInit {

    @Input('BackUrl') BackUrl: string;

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {
    }
}
