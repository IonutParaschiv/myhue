import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule, HttpClient } from '@angular/core';

@NgModule({
    declarations: [ ContactComponent ],
    exports: [ ContactComponent ],
    // imports: [
    //     BrowserModule,
    //     HttpClientModule,
    // ],
    // providers: [
    //     HttpClient
    // ]
})

export class ContactModule{}