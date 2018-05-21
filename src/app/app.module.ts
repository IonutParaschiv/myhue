import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { InfoModule } from './info/info.module';
import { ContactModule } from './contact/contact.module';
import appRoutes from './app.routes';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [
        InfoModule,
        ContactModule,
        appRoutes
    ]
})

export class AppModule{}