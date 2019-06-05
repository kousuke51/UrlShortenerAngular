import { UrlInfo } from './../../shared/url-info.model';
import { UrlShortenerService } from './../../shared/url-shortener.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styles: []
})
export class UrlListComponent implements OnInit {

  constructor(private service: UrlShortenerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: UrlInfo) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(UrlInfoId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteURLDetail(UrlInfoId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'URL Shortener');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
