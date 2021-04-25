import { Component, OnInit, Input } from '@angular/core';
import { NgxTimelineEvent } from '../../models/NgxTimelineEvent';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-timeline-event',
  templateUrl: './ngx-timeline-event.component.html',
  styleUrls: ['./ngx-timeline-event.component.scss']
})
export class NgxTimelineEventComponent implements OnInit {

  @Input() event: NgxTimelineEvent;
  @Input() reverse: boolean;
  @Input() langCode?: string;

  constructor() { }

  ngOnInit(): void {
  }

  getDateObj(): any {
    let day;
    let month;
    let year;
    if (this.event?.timestamp) {
      const timestamp = new Date(this.event.timestamp);
      month = new DatePipe(this.langCode === 'en' ? 'en-US' : 'it-IT').transform(timestamp, 'MMMM');
      day = new DatePipe(this.langCode === 'en' ? 'en-US' : 'it-IT').transform(timestamp, 'dd');
      year = timestamp.getFullYear();
    }

    return {day, month, year};
  }

  getIcon() {
    let icon = 'bell-outline';
    const type = this.event?.type;
    if (type === 'EXPIRATION_NOTICE') {
      icon = 'calendar-outline';
    } else if(type === 'DOCUMENT') {
      icon = 'file-outline';
    }
    return icon;
  }

  getUrlLabel() {
    let label = 'CLAIMS.EVENT_GO_TO_DETAIL';
    const type = this.event?.type;
    if(type === 'DOCUMENT') {
      label = 'CLAIMS.EVENT_DOWNLOAD_DOCUMENT';
    }
    return label;
  }

  handleFooterClick() {
    /* const type = this.event?.type;
    if(type === 'DOCUMENT' && this.event.documentId) {
      this.startDownloadDocument(this.event.documentId);
    } else if (this.event?.externalUrl){
      let url = this.event.externalUrl;
      url = url.startsWith('http') ? url : `http://${url}`;
      window.open(url, '_blank');
    } */
  }

  showLink() {
    let show = false;
    /* const type = this.event?.type;
    if(type === 'DOCUMENT' && this.event.documentId) {
      show = true;
    } else if (this.event?.externalUrl){
      show = true;
    } */
    return show;
  }

  startDownloadDocument(documentId) {
    /* this.documentService.getDocument(documentId).subscribe(res => {
      if (res?.document?.format && res.document.title) {
        this.downloadDocument(documentId, res.document);
      }
    }); */
  }

  downloadDocument(documentId: string) {
    /* console.warn('here');
    this.documentService.downloadDocument(documentId).subscribe(
      (r) => {
        console.warn('here 2');
        const file = new Blob([r], {type: document.format});
        saveAs(file, document.title);
      }
    ); */
  }

}
