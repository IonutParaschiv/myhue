import { NgModule } from "@angular/core";
import { InfoComponent } from "@core/info/info.component";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoService } from '@core/services/info.service';

@NgModule({
    declarations: [ InfoComponent ],
    exports: [ InfoComponent ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [
        InfoService,
        HttpClient
    ]
})

export class InfoModule{
}