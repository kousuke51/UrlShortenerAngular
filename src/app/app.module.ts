import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { UrlCreateComponent } from './url-shortener/url-create/url-create.component';
import { UrlListComponent } from './url-shortener/url-list/url-list.component';
import { UrlShortenerService } from './shared/url-shortener.service';

@NgModule({
  declarations: [
    AppComponent,
    UrlShortenerComponent,
    UrlCreateComponent,
    UrlListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UrlShortenerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
