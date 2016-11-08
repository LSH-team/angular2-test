import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContactModule } from './contact/contact.module';
import { CoreModule } from  './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { HighlightDirective } from './highlight.directive';

import { AdminModule } from './admin/admin.module';

import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContactModule,
        CoreModule.forRoot({userName: 'Lsh'}),
        AdminModule,
        LoginRoutingModule
    ],
    declarations: [
        AppComponent,
        HighlightDirective,
        LoginComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
