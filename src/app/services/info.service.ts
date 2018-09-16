import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap, filter } from 'rxjs/operators';

const token = '5ayAfZTF8P07qPhBDqUopXrT3Wil0It0yL0yyFVH' //this will change every time. we'll need to create persistent login

@Injectable()
export class InfoService {
    constructor(private httpClient: HttpClient) {}

    getInfoRaw(){
        return this.httpClient.get('/api/info')
    }

    getLightsBasic(url){
        return this.httpClient.get(`${url}/lights`)
    }

    getBridgeInfo(){
        return this.httpClient.get('https://www.meethue.com/api/nupnp');
    }

    formatBaseUrl(data){
        return `http://${data[0].internalipaddress}/api/${token}`;
    }

    toggleLightState(id, value, url){
        return this.httpClient.put(`${url}/lights/${id}/state`, {"on":value})
    }
}