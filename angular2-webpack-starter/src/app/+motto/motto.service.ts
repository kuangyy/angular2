import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {
  requestOptionsProvider
} from '../../default-request-options.service';
import { Motto } from './motto.model';

@Injectable()
export class MottoService {

  baseurl = 'http://localhost:9080/a/motto';

  constructor(private http: Http,
              private jsonp: Jsonp) {
  }


  public getList(): Observable<any> {
    return this.http.get(this.baseurl + '/list')
      .map(this.extractJsonData)
      .catch(this.handleError);
  }

  public add(motto: Motto): Observable<any> {
    return this.http.post(this.baseurl + '/add', motto)
      .map(this.extractJsonData)
      .catch(this.handleError);
  }

  public update(motto: Motto): Observable<any> {
    return this.http.put(this.baseurl + '/update', motto)
      .map(this.extractJsonData)
      .catch(this.handleError);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.baseurl + '/delete/' + id)
      .map(this.extractJsonData)
      .catch(this.handleError);
  }


  private extractJsonData(res: Response) {
    let body = res.json() || {};
    return body;
  }

  private handleError(error: Response | any) {
    return error;
  }
}
