import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <app-title [subtitle]="subtitle"></app-title>
        <h1>My First Attribute Directive</h1>
        <h4>Pick a highlight color</h4>
        <div>
            <input type="radio" name="colors" (click)="color='lightgreen'"/>Green
            <input type="radio" name="colors" (click)="color='yellow'"/>Yellow
            <input type="radio" name="colors" (click)="color='cyan'"/>Cyan
        </div>
        <label [myHighlight]="color">Highlight me!</label>
        <br/>
        <label [myHighlight]="color" [defaultColor]="'violet'">Highlight me too!</label>
        <br/>
        <br/>
        <br/>
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
    private color: string;
}