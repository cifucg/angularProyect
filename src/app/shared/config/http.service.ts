import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpService {
    private API_URL= environment.API_URL;
    /* httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
        })
    } */

    constructor(private http: HttpClient) {

    }

    get(url, params?): Observable<any>{
        /* const param = new HttpParams()
            .set('username', params.username) */
        //this.httpOptions.headers.set('params', params)
        return this.http.get(this.API_URL+url);
    }
}