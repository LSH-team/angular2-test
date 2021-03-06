import { Component } from '@angular/core';

@Component({
    template: `
            <h3>ADMIN</h3>
            <nav>
                <a routerLinkActive="active" routerLink="./" [routerLinkActiveOptions]="{ exact: true}">Dashboard</a>
                <a routerLinkActive="active" routerLink="./crises" [queryParams]="{session_id: '111'}" fragment="ancho">Manage Crises</a>
                <a routerLinkActive="active" routerLink="./heroes">Manage Heroes</a>
            </nav>
            <router-outlet></router-outlet>
        `
})

export class AdminComponent { }