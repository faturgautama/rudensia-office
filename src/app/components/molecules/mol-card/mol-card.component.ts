import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-mol-card',
    templateUrl: './mol-card.component.html',
    styleUrls: ['./mol-card.component.css']
})
export class MolCardComponent implements OnInit {

    @Input('CardCaption') CardCaption: string;

    constructor() { }

    ngOnInit(): void {
    }

}
