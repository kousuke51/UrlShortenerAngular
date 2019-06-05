import { UrlInfo } from './url-info.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  formData: UrlInfo;
  readonly rootURL = 'http://localhost:54925/api';
  list : UrlInfo[];

  constructor(private http: HttpClient) { }

  postURLDetail() {
    return this.http.post(this.rootURL + '/UrlInfo', this.formData);
  }
  putURLDetail() {
    return this.http.put(this.rootURL + '/UrlInfo/'+ this.formData.UrlInfoId, this.formData);
  }
  deleteURLDetail(id) {
    return this.http.delete(this.rootURL + '/UrlInfo/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/UrlInfo')
    .toPromise()
    .then(res => this.list = res as UrlInfo[]);
  }
}