import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, PreloadingStrategy} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import {PreloadSelectedModules} from "../selective-preload-strategy";

@Component({
    template: `
            <p>Dashboard</p>
            <p>Session ID: {{sessionId | async}}</p>
            <a id="anchor"></a>
            <p>Token: {{token | async}}</p>
            
            Preloaded Modules
            <ul>
                <li *ngFor="let module of modules">{{module}}</li>
            </ul> 
        `
})

export class AdminDashboardComponent  implements OnInit{
    sessionId: Observable<string>;
    token: Observable<string>;
    modules: string[];

    constructor(
        private route: ActivatedRoute,
        private preloadStrategy: PreloadSelectedModules
    ) {
        this.modules = preloadStrategy.preloadedModules;
    }

    ngOnInit() {
        console.log(this.route)
        this.sessionId = this.route
            .queryParams
            .map(params => params['session_id'] || 'None');

        this.token = this.route
            .fragment
            .map(fragment => fragment || 'None')
    }
}