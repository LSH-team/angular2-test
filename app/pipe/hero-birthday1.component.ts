import { Component } from '@angular/core';

@Component({
    selector: 'hero-birthday',
    template: `
            <p>The hero's birthday is {{birthday | date | uppercase}}</p>
            <p>The hero's birthday is {{birthday | date:"MM/dd/yy"}}</p>
            <p>The hero's birthday is {{birthday | date:format | uppercase}}</p>
            <button (click)="toggleFormat()">Toggle Format</button>
        `,
})

export class HeroBirthdayComponent {
    birthday = new Date(2016, 11, 7);

    toggle = true;

    get format() {
        return this.toggle? 'shortDate': 'fullDate';
    }

    toggleFormat() {
        this.toggle = !this.toggle;
    }
}