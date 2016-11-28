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
var nextId = 1;
var HeavyLoaderComponent = (function () {
    function HeavyLoaderComponent() {
        this.id = nextId++;
    }
    HeavyLoaderComponent.prototype.ngOnDestroy = function () {
        this.log("hevy-loader " + this.id + " destoryer, cleaning up");
    };
    HeavyLoaderComponent.prototype.ngOnInit = function () {
        this.log("heavy-loader " + this.id + " initialized,\n        loading 10,000 rows of data from the server");
    };
    HeavyLoaderComponent.prototype.log = function (msg) {
        this.logs.push(msg);
        this.tick();
    };
    HeavyLoaderComponent.prototype.tick = function () {
        setTimeout(function () { }, 0);
    };
    return HeavyLoaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], HeavyLoaderComponent.prototype, "logs", void 0);
HeavyLoaderComponent = __decorate([
    core_1.Component({
        selector: 'heavy-loader',
        template: '<span>heavy loader #{{id}} on duty!</span>'
    }),
    __metadata("design:paramtypes", [])
], HeavyLoaderComponent);
exports.HeavyLoaderComponent = HeavyLoaderComponent;
//# sourceMappingURL=heavy-loader.component.js.map