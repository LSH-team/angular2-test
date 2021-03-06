"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var TestComponent = (function () {
    function TestComponent() {
        this.isDisabled = false;
        this.isActive = true;
        this.firstName = 'test';
        this.width = 20;
        this.birthday = new Date();
        this.state = 'in';
        this.test = [
            { name: 'll', state: this.state },
            { name: 'ss', state: this.state },
            { name: 'tt', state: this.state }
        ];
        this.statue = this.test[0].name == 'ss' ? 1 : 2;
        this.source = Observable_1.Observable.of(1, 2, 3, 4, 5)
            .subscribe(function (x) { return x % 2 === 0 ? console.log("Next: %s", x) : ''; });
    }
    TestComponent.prototype.onToggleState = function (item) {
        if (item.state == 'in') {
            item.state = 'void';
        }
        else {
            item.state = 'in';
        }
    };
    TestComponent.prototype.animationStarted = function (event) {
        console.log(event);
    };
    TestComponent.prototype.animationDone = function (event) {
        console.log(event);
    };
    TestComponent.prototype.touch = function () {
        console.log("touch");
    };
    TestComponent.prototype.out = function (str) {
        console.log(str);
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        template: "\n            <br/>\n            <div>\n                <input [class.font-color]=\"firstName\" [style.width.rem]=\"width\" [(ngModel)]=\"firstName\"/>\n            </div>\n            <div class=\"div-test\"></div>\n            <div [ngClass]=\"{'test': isActive }\"></div>\n            hello {{firstName}}\n            <br/>\n            <h3>angular style</h3>\n            <span *ngIf=\"firstName\">Lsh</span>\n            <br/>\n            <div class=\"testNot\">\n                <span class=\"animation\" *ngFor=\"let item of test\" [@flyInOut]=\"item.state\" (@flyInOut.start)=\"animationStarted($event)\" (@flyInOut.done)=\"animationDone($event)\" (click)=\"onToggleState(item)\">{{item.name}}</span>\n                <div [ngSwitch]=\"statue\">\n                    <template [ngSwitchCase]=\"1\">1</template>\n                    <template [ngSwitchCase]=\"2\">2</template>\n                    <template ngSwitchDefault>Unknown</template>\n                </div>\n            </div>\n            <hero-birthday [inBirthday]=\"birthday\" (outFirstName)=\"firstName = $event\" [firstName]=\"firstName\">\n                <pow-boost-calculator></pow-boost-calculator>\n            </hero-birthday> \n            <p>Super power boost: 2 ^ <input #strenth (keyup)=\"0\" class=\"form-control\"/> = {{2 | exponentialStrength: strenth.value}}</p>\n            <svg:rect x=\"0\" y=\"0\" width=\"100\" height=\"100\"></svg:rect>\n            <button (click)=\"touch()\" [ngClass]=\"{active: isActive}\" [disabled]=\"isDisabled\">link</button>\n            <input #testInput placeholder=\"testInput\" (keyup)=\"0\" minlength=\"3\" maxlength=\"10\" name=\"testInput\"/>\n            <p>{{testInput.value}}</p>\n            ",
        styleUrls: ['test.component.css'],
        styles: ['span { color: green;}', 'h3 { background-color: yellowgreen !important;}'],
        moduleId: module.id,
        animations: [
            core_1.trigger('testState', [
                core_1.state('inactive', core_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                core_1.state('active', core_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.1)'
                })),
                core_1.transition('inactive => active', [core_1.style({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.3)',
                    }), core_1.animate('100ms ease-in')]),
                core_1.transition('active => inactive', [core_1.style({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    }), core_1.animate('100ms ease-out')])
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
            core_1.trigger('flyInOut', [
                core_1.state('in', core_1.style({
                    width: 120,
                    transform: 'translateX(0)',
                    opacity: 1
                })),
                core_1.transition('void => *', [
                    core_1.style({
                        width: 10,
                        transform: 'translateX(50px)',
                        opacity: 0
                    }),
                    core_1.group([
                        core_1.animate('0.3s 0.1s ease', core_1.style({
                            transform: 'translate(0)',
                            width: 120
                        })),
                        core_1.animate('0.3s ease', core_1.style({
                            opacity: 1
                        }))
                    ])
                ]),
                core_1.transition('* => void', [
                    core_1.group([
                        core_1.animate('0.3s ease', core_1.style({
                            transform: 'translateX(50px)',
                            width: 10
                        })),
                        core_1.animate('0.3s 0.2s ease', core_1.style({
                            opacity: 0
                        }))
                    ])
                ])
            ]),
            core_1.trigger('itemState', [
                core_1.state('inactive', core_1.style({
                    transform: 'translateX(0) scale(1)'
                })),
                core_1.state('active', core_1.style({
                    transform: 'translateX(0) scale(1.1)'
                })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out')),
                core_1.transition('void => inactive', [
                    core_1.style({ transform: 'translateX(-100%) scale(1)' }),
                    core_1.animate(100)
                ]),
                core_1.transition('inactive => void', [
                    core_1.animate(100, core_1.style({
                        transform: 'translateX(100%) scale(1)',
                    }))
                ]),
                core_1.transition('active => void', [
                    core_1.animate(200, core_1.style({ transform: 'translateX(0) scale(0)' }))
                ]),
                core_1.transition('void => active', [
                    core_1.style({ transform: 'translateX(0) scale(0)' }),
                    core_1.animate(200)
                ])
            ]),
            core_1.trigger('shrinkOut', [
                core_1.state('in', core_1.style({
                    height: '*'
                })),
                core_1.transition('* => void', [
                    core_1.style({ height: '*' }),
                    core_1.animate(250, core_1.style({ height: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map