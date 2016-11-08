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

import { InnerHtmlBindingComponent } from './safe/inner-html-binding.component';
import { BypassSecurityComponent } from './safe/bypass-security.component';
import { HeavyLoaderComponent } from './structural/heavy-loader.component';
import { TemplateTestComponent } from './structural/template-test.component';

import { UnlessDirective } from './structural/unless.directive';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContactModule,
        CoreModule.forRoot({userName: 'Lsh'}),
        AdminModule,
        LoginRoutingModule,
    ],
    declarations: [
        AppComponent,
        HighlightDirective,
        LoginComponent,
        InnerHtmlBindingComponent,
        BypassSecurityComponent,
        HeavyLoaderComponent,
        TemplateTestComponent,
        UnlessDirective
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
