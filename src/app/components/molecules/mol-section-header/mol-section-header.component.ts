import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-mol-section-header',
    templateUrl: './mol-section-header.component.html',
    styleUrls: ['./mol-section-header.component.css']
})
export class MolSectionHeaderComponent implements OnInit {

    @Input('SectionHeaderTitle') SectionHeaderTitle: string;

    constructor() { }

    ngOnInit(): void {
    }

}
