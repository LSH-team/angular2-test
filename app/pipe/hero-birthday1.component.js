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
var HeroBirthdayComponent = (function () {
    function HeroBirthdayComponent() {
        this.birthday = new Date(2016, 11, 7);
        this.inBirthday = '';
        this.firstName = 'www';
        this.outFirstName = new core_1.EventEmitter();
        this.toggle = true;
    }
    Object.defineProperty(HeroBirthdayComponent.prototype, "format", {
        get: function () {
            return this.toggle ? 'shortDate' : 'fullDate';
        },
        enumerable: true,
        configurable: true
    });
    HeroBirthdayComponent.prototype.toggleFormat = function () {
        this.toggle = !this.toggle;
        this.firstName = this.firstName == 'test' ? 'www' : 'test';
        this.outFirstName.emit(this.firstName);
    };
    return HeroBirthdayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeroBirthdayComponent.prototype, "inBirthday", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeroBirthdayComponent.prototype, "firstName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HeroBirthdayComponent.prototype, "outFirstName", void 0);
HeroBirthdayComponent = __decorate([
    core_1.Component({
        selector: 'hero-birthday',
        template: "\n            <p>The hero's birthday is {{birthday | date | uppercase}}</p>\n            <p>The hero's birthday is {{birthday | date:\"MM/dd/yy\"}}</p>\n            <p>The hero's birthday is {{birthday | date:format | uppercase}}</p>\n            <p>The test hero's birthday is {{inBirthday | date: \"MM/dd/yy hh:mm:ss\"}}</p>\n            <button (click)=\"toggleFormat()\">Toggle Format</button>\n        ",
    }),
    __metadata("design:paramtypes", [])
], HeroBirthdayComponent);
exports.HeroBirthdayComponent = HeroBirthdayComponent;
//# sourceMappingURL=hero-birthday1.component.js.map