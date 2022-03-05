import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-atom-subheading-text',
    templateUrl: './atom-subheading-text.component.html',
    styleUrls: ['./atom-subheading-text.component.css']
})
export class AtomSubheadingTextComponent implements OnInit {

    @Input('SubHeadingText') SubHeadingText: string;

    constructor() { }

    ngOnInit(): void {
    }

}
