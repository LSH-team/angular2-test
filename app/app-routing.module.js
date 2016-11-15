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
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("./auth-guard.service");
var selective_preload_strategy_1 = require("./selective-preload-strategy");
var routes = [
    { path: '', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' },
    { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
    { path: 'test', loadChildren: 'app/test/test.module#TestModule' },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canLoad: [auth_guard_service_1.AuthGuard], data: { preload: true } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
        exports: [router_1.RouterModule],
        providers: [
            selective_preload_strategy_1.PreloadSelectedModules
        ]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map