import {Component, Input, trigger, state, style, transition, animate, keyframes, group} from '@angular/core';

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
            <h3>angular style</h3>
            <span *ngIf="firstName">Lsh</span>
            <br/>
            <div>
                <span class="animation" *ngFor="let item of test" [@flyInOut]="item.state" (@flyInOut.start)="animationStarted($event)" (@flyInOut.done)="animationDone($event)" (click)="onToggleState(item)">{{item.name}}</span>
                <div [ngSwitch]="statue">
                    <template [ngSwitchCase]="1">1</template>
                    <template [ngSwitchCase]="2">2</template>
                    <template ngSwitchDefault>Unknown</template>
                </div>
            </div>
            <hero-birthday></hero-birthday>
            <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
            <pow-boost-calculator></pow-boost-calculator>
            `,
    styleUrls: ['test.component.css'],
    styles: [ 'span { color: green;}', 'h3 { background-color: yellowgreen;}'],
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
            transition('inactive => active',[style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.3)',
            }) ,animate('100ms ease-in')]),
            transition('active => inactive',
                [style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                }) ,animate('100ms ease-out')])
        ]),
        //基于keyframes的多阶段动画
        // trigger('flyInOut', [
        //     state('in', style({
        //         transform: 'translateX(0)'
        //     })),
        //     transition(':enter', [
        //         animate(300, keyframes([
        //             style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        //             style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
        //             style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        //         ]))
        //     ]),
        //     transition(':leave', [
        //         animate(300, keyframes([
        //             style({opacity: 1, transform: 'translateX(0)', offset: 0}),
        //             style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        //             style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
        //         ]))
        //     ])
        // ]),

        //并行动画组
        trigger('flyInOut', [
            state('in', style({
                width: 120,
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('void => *', [
                style({
                    width: 10,
                    transform: 'translateX(50px)',
                    opacity: 0
                }),
                group([
                    animate('0.3s 0.1s ease', style({
                        transform: 'translate(0)',
                        width: 120
                    })),
                    animate('0.3s ease', style({
                        opacity: 1
                    }))
                ])
            ]),
            transition('* => void', [
                group([
                    animate('0.3s ease', style({
                        transform: 'translateX(50px)',
                        width: 10
                    })),
                    animate('0.3s 0.2s ease', style({
                        opacity: 0
                    }))
                ])
            ])
        ]),
        trigger('itemState', [
            state('inactive', style({
                transform: 'translateX(0) scale(1)'
            })),
            state('active',style({
                transform: 'translateX(0) scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out')),
            transition('void => inactive', [
                style({transform: 'translateX(-100%) scale(1)'}),
                animate(100)
            ]),
            transition('inactive => void', [
                animate(100, style({
                    transform: 'translateX(100%) scale(1)',
                }))
            ]),
            transition('active => void', [
                animate(200, style({transform: 'translateX(0) scale(0)'}))
            ]),
            transition('void => active', [
                style({transform: 'translateX(0) scale(0)'}),
                animate(200)
            ])
        ]),
        trigger('shrinkOut', [
            state('in', style({
                height: '*'
            })),
            transition('* => void', [
                style({height: '*'}),
                animate(250, style({height: 0}))
            ])
        ])
    ]
})

export class TestComponent {
    isActive: boolean = true;
    firstName: string = 'test';
    width: number = 20;
    private state: string='in';

    test = [
        { name: 'll', state: this.state},
        { name: 'ss', state: this.state},
        { name: 'tt', state: this.state}
    ];

    statue = this.test[0].name == 'ss'? 1:2;

    onToggleState(item): void {
        if (item.state == 'in') {
            item.state = 'void';
        } else {
            item.state = 'in';
        }
    }

    animationStarted(event): void {
        console.log(event);
    }

    animationDone (event): void {
        console.log(event);
    }
}