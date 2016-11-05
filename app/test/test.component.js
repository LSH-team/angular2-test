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
var TestComponent = (function () {
    function TestComponent() {
        this.isActive = true;
        this.firstName = 'test';
        this.width = 20;
        this.test = [
            { name: 'll' },
            { name: 'ss' },
            { name: 'tt' }
        ];
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        template: "\n            <br/>\n            <div>\n                <input [class.font-color]=\"firstName\" [style.width.rem]=\"width\" [(ngModel)]=\"firstName\"/>\n            </div>\n            <div class=\"div-test\"></div>\n            <div [ngClass]=\"{'test': isActive }\"></div>\n            hello {{firstName}}\n            <br/>\n            <span *ngIf=\"firstName\">Lsh</span>\n            <br/>\n            <ul>\n                <li class=\"animation\" style=\"text-align: center;\" *ngFor=\"let item of test\" [@testState]=\"item.state\" (click)=\"item.toggleState()\">\n                    {{item.name}}\n                </li>\n            </ul>\n            ",
        styleUrls: ['test.component.css'],
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
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map