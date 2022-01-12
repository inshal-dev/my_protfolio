import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  downloadPdf() {
    const pdfUrl = '../../assets/Inshal-Resume.pdf';
    const pdfName = 'Mohammad-Inshal-Resume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  gotoProject(){
    this.route.navigate(['/project'])
  }
}
