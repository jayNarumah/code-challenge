import { Injectable } from "@angular/core";
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
@Injectable({ providedIn: 'root' })

export class PdfService {
    constructor() {

    }

    downloadPdf() {
        let data = document.getElementById('content');
        html2canvas(data).then((canvas) => {
            let fileWidth = 208;
            let fileHeight = (canvas.height * fileWidth) / canvas.width;
            const FILEURI = canvas.toDataURL('image/png');
            let PDF = new jspdf('p', 'mm', 'a4');
            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
            const pdfName = 'report' + new Date() + '.pdf'
            PDF.save(pdfName);
        });
    }
}