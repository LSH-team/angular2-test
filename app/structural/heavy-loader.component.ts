import { Component, Input, OnDestroy, OnInit } from '@angular/core';

let nextId = 1;

@Component({
    selector: 'heavy-loader',
    template: '<span>heavy loader #{{id}} on duty!</span>'
})

export class HeavyLoaderComponent implements OnDestroy, OnInit {
    id = nextId++;
    @Input() logs: string[];

    ngOnDestroy() {
        this.log(`hevy-loader ${this.id} destoryer, cleaning up`);
    }

    ngOnInit() {
        this.log(`heavy-loader ${this.id} initialized,
        loading 10,000 rows of data from the server`);
    }

    private log(msg: string) {
        this.logs.push(msg);
        this.tick();
    }

    private tick() {
        setTimeout(() => { }, 0);
    }
}
