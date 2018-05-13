import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class InfoService {
    public infoObj;
    constructor(private httpClient: HttpClient) {}

    getInfoRaw(){
        return this.httpClient.get('/api/info')
    }
}