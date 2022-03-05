import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-atom-button-biru',
    templateUrl: './atom-button-biru.component.html',
    styleUrls: ['./atom-button-biru.component.css']
})
export class AtomButtonBiruComponent implements OnInit {

    @Input('ButtonBiruId') ButtonBiruId: string;
    @Input('ButtonBiruCaption') ButtonBiruCaption: string;
    @Input('IsButtonBlock') IsButtonBlock = true;
    @Input('DisablingButton') DisablingButton = false;

    @Output('HandlingClickButtonBiru') HandlingClickButtonBiru = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    handleClickButtonBiru(args: any): void {
        this.HandlingClickButtonBiru.emit(args);
    }
}
