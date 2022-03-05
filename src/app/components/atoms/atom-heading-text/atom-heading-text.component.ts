import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-atom-heading-text',
    templateUrl: './atom-heading-text.component.html',
    styleUrls: ['./atom-heading-text.component.css']
})
export class AtomHeadingTextComponent implements OnInit {

    @Input('HeadingText') HeadingText: string;
    @Input('HeadingClass') HeadingClass: string;

    constructor() { }

    ngOnInit(): void {
    }

}
