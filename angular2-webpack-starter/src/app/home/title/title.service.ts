import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {
  requestOptionsProvider
} from '../../default-request-options.service';

@Injectable()
export class Title {

  constructor(private http: Http,
              private jsonp: Jsonp) {
  }

  public getData(): Observable<string> {
    console.log('Title#getData(): Get Data');
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());

    let url = 'http://localhost:9080/a';

    // let params = new URLSearchParams();
    // params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');

    // return this.jsonp.get(url, {search: params})


    return this.http.get(url)
      .map(this.extractData);
    // .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.text();
    return body;
  }

  private handleError(error: Response | any) {
    return error;
  }
}
