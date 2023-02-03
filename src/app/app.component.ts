import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  constructor(){

  }
  ngAfterViewInit(): void {
    // firebase.default.analytics().logEvent('eventname', {
    //   'firsttimeuser' : true,
    // })
  }
  downloadPdf() {
    const pdfUrl = '../../assets/Inshal-Resume.pdf';
    const pdfName = 'Mohammad-Inshal-Resume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
