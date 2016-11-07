import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroService, Hero} from './hero.service';

@Component({
    template: `
            <h3 highlight>Hero Detail</h3>
            <div *ngIf="hero">
                <div>Id: {{hero.id}}</div><br/>
                <label>Name:
                    <input [(ngModel)]="hero.name"/>
                </label>
            </div>
            <br/>
            <a routerLink="../">Hero List</a>
        `
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ){};

    ngOnInit(): void {
        console.log(this.route)
        let id = parseInt(this.route.snapshot.params["id"], 10);
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
}