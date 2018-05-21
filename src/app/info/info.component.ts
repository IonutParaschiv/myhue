import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'info',
    templateUrl: `info.component.html`
})

export class InfoComponent implements OnInit{
    public infoObj: {}
    public lightsData : {}

    constructor( private InfoService: InfoService){}

    public ngOnInit(): void {
        this.InfoService.getBridgeInfo()
            .subscribe(bridgeData => {
                let url = this.InfoService.formatBaseUrl(bridgeData)
                this.InfoService.getLightsBasic(url)
                    .subscribe( lightsData => {
                        let lightsArray = []
                        for( let i in lightsData){
                            console.log(lightsData[i]);
                            lightsArray.push(lightsData[i]);
                        }
                        this.lightsData = lightsArray;
                    });

            })

    }
}