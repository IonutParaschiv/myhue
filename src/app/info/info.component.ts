import { Component, OnInit } from '@angular/core';
import { InfoService } from '@core/services/info.service';


@Component({
    selector: 'info',
    templateUrl: `info.component.html`
})

export class InfoComponent implements OnInit{
    public lightsData : {}
    public url: string = "";
    constructor( private InfoService: InfoService){}

    public ngOnInit(): void {
        this.InfoService.getBridgeInfo()
            .subscribe(bridgeData => {
                this.url = this.InfoService.formatBaseUrl(bridgeData);
                this.getLights();
            })

    }
    public getLights(){
        this.InfoService.getLightsBasicUrl(this.url)
            .subscribe( lightsData => {
                let lightsArray = []
                for( let i in lightsData){
                    console.log(lightsData[i], i);
                    lightsData[i].lightId = i;
                    lightsArray.push(lightsData[i]);
                }
                this.lightsData = lightsArray;
            });
    }

    public toggleState(currentState, lightId): void{
        this.InfoService.toggleLightState(lightId, !currentState, this.url)
            .subscribe( (data) => {
                if(data[0].success){
                    this.getLights();
                    // this.lightsData[lightId].state.on = !currentState;
                    console.log('is done');
                }
            })
    }
}