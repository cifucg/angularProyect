import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigService {
    api = 'https://gnpzznxtr7.execute-api.us-east-1.amazonaws.com/dev/'
    /* httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
        })
    } */

    constructor(private http: HttpClient) {

    }

    public get(url, params?){
        //this.httpOptions.headers.set('params', params)
        return this.http.get(this.api+url);
    }
}