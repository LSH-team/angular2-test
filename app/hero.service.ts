import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()//注意括号, TypeScript 看到@Injectable()装饰器就会记下本次的元数据，注入依赖就会使用这些元数据。

export class HeroService {
    private heroesUrl = 'app/heroes';
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    constructor(private http: Http) {};

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    };
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000))//delay 2s
            .then(() => this.getHeroes());
    };
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id))
    };

    private headers = new Headers({'Content-Type': 'application/json'});

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    };

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    };

    delete(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}