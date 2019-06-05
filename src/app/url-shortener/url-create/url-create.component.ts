import { UrlShortenerService } from './../../shared/url-shortener.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-url-create',
  templateUrl: './url-create.component.html',
  styles: []
})
export class UrlCreateComponent implements OnInit {

  constructor(private service: UrlShortenerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      UrlInfoId : 0,
      ShortUrl : '',
      LongUrl: '', 
      Suffix: '',
      CreatedDate: new Date(), 
      UpdatedDate: new Date(), 
      ExpirationDate: new Date(), 
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.UrlInfoId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postURLDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'URL Shortener');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putURLDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'URL Shortener');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }


}
