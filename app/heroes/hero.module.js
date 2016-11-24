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
var shared_module_1 = require("../shared/shared.module");
// import { HeroDetailComponent } from "./hero-detail.component";
// import { HeroListComponent } from './hero-list.component';
// import { HeroComponent } from "./hero.component";
// import { HeroRoutingModule } from './hero-routing.module';
var _1 = require("../heroes/");
var HeroModule = (function () {
    function HeroModule() {
    }
    return HeroModule;
}());
HeroModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, _1.HeroRoutingModule],
        declarations: [
            _1.HeroComponent,
            _1.HeroDetailComponent,
            _1.HeroListComponent,
        ]
    }),
    __metadata("design:paramtypes", [])
], HeroModule);
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.js.map