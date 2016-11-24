import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'hero-birthday',
    template: `
            <p>The hero's birthday is {{birthday | date | uppercase}}</p>
            <p>The hero's birthday is {{birthday | date:"MM/dd/yy"}}</p>
            <p>The hero's birthday is {{birthday | date:format | uppercase}}</p>
            <p>The test hero's birthday is {{inBirthday | date: "MM/dd/yy hh:mm:ss"}}</p>
            <button (click)="toggleFormat()">Toggle Format</button>
        `,
})

export class HeroBirthdayComponent {
    birthday = new Date(2016, 11, 7);
    @Input() inBirthday = '';
    @Input() firstName = 'www';
    @Output() outFirstName = new EventEmitter();

    toggle = true;

    get format() {
        return this.toggle? 'shortDate': 'fullDate';
    }

    toggleFormat() {
        this.toggle = !this.toggle;
        this.firstName = this.firstName == 'test'? 'www': 'test';
        this.outFirstName.emit(this.firstName);
    }
}