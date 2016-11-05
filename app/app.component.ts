import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <app-title [subtitle]="subtitle"></app-title>
        <nav>
            <!--<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>-->
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
            <a routerLink="/crisis" routerLinkActive="active">Crisis</a>
            <a routerLink="/test" routerLinkActive="actice">Test</a>
        </nav>
        <router-outlet></router-outlet>
         `,
    moduleId: module.id
})

export class AppComponent {
    title = 'Tour of Heroes';
    subtitle = 'v1';
}