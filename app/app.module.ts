import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContactModule } from './contact/contact.module';
import { CoreModule } from  './core/core.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContactModule,
        CoreModule.forRoot({userName: 'Lsh'}),
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
