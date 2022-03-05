import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IInvoiceAirModel } from 'src/app/models/invoice-air.model';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-print-invoice',
    templateUrl: './print-invoice.component.html',
    styleUrls: ['./print-invoice.component.css']
})
export class PrintInvoiceComponent implements OnInit {

    @ViewChild('printSection') printSection: ElementRef;

    @Input('DataInvoice') DataInvoice: IInvoiceAirModel;

    ShowTunggakan = false;

    SubtotalTunggakan: number;

    constructor() {
    }

    ngOnInit(): void {
        setTimeout(() => {
            if (this.DataInvoice.tunggakan.length > 0) {
                this.ShowTunggakan = true;

                this.SubtotalTunggakan = 0;

                this.DataInvoice.tunggakan.forEach((item) => {
                    this.SubtotalTunggakan += item.subtotal;
                });
            }
        }, 1000);
    }

    onPrintInvoice(): void {
        const div = document.getElementById("print-section");
        const options = { background: "white", height: div.clientHeight, width: div.clientWidth };

        html2canvas(div, options).then((canvas) => {
            let doc = new jsPDF('p', 'mm', 'a6');

            let imgData = canvas.toDataURL('image/PNG');

            let width = doc.internal.pageSize.getWidth();
            let heigth = doc.internal.pageSize.getHeight();

            doc.addImage(imgData, 'PNG', 0, 0, 105.00077777777776, 148.00086111111108);

            let pdfOutput = doc.output();

            let buffer = new ArrayBuffer(pdfOutput.length);

            let array = new Uint8Array(buffer);

            for (let i = 0; i < pdfOutput.length; i++) {
                array[i] = pdfOutput.charCodeAt(i);
            };

            const fileName = `Invoice Customer ${this.DataInvoice.nama_customer}.pdf`;

            doc.save(fileName);
        });
    }
}
