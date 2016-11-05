import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    template: `
            <br/>
            <div>
                <input [class.font-color]="firstName" [style.width.rem]="width" [(ngModel)]="firstName"/>
            </div>
            <div class="div-test"></div>
            <div [ngClass]="{'test': isActive }"></div>
            hello {{firstName}}
            <br/>
            <span *ngIf="firstName">Lsh</span>
            <br/>
            <ul>
                <li class="animation" style="text-align: center;" *ngFor="let item of test" [@testState]="item.state" (click)="item.toggleState()">
                    {{item.name}}
                </li>
            </ul>
            `,
    styleUrls: ['test.component.css'],
    moduleId: module.id,
    animations: [
        trigger('testState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})

export class TestComponent {
    isActive: boolean = true;
    firstName: string = 'test';
    width: number = 20;
    test = [
        { name: 'll'},
        { name: 'ss'},
        { name: 'tt'}
    ]
}