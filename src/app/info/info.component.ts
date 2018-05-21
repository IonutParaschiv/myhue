import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'info',
    templateUrl: `info.component.html`
})

export class InfoComponent implements OnInit{
    public infoObj: {}

    constructor( private InfoService: InfoService){}

    public ngOnInit(): void {

        this.InfoService.getInfoRaw()
                .map( res => this.infoObj = res)
                .subscribe(
                    success => {
                        console.log(this.infoObj)
                    }
                );

    }
}