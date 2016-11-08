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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var contact_module_1 = require("./contact/contact.module");
var core_module_1 = require("./core/core.module");
var app_routing_module_1 = require("./app-routing.module");
var highlight_directive_1 = require("./highlight.directive");
var admin_module_1 = require("./admin/admin.module");
var login_component_1 = require("./login/login.component");
var login_routing_module_1 = require("./login/login-routing.module");
var inner_html_binding_component_1 = require("./safe/inner-html-binding.component");
var bypass_security_component_1 = require("./safe/bypass-security.component");
var heavy_loader_component_1 = require("./structural/heavy-loader.component");
var template_test_component_1 = require("./structural/template-test.component");
var unless_directive_1 = require("./structural/unless.directive");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            contact_module_1.ContactModule,
            core_module_1.CoreModule.forRoot({ userName: 'Lsh' }),
            admin_module_1.AdminModule,
            login_routing_module_1.LoginRoutingModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            highlight_directive_1.HighlightDirective,
            login_component_1.LoginComponent,
            inner_html_binding_component_1.InnerHtmlBindingComponent,
            bypass_security_component_1.BypassSecurityComponent,
            heavy_loader_component_1.HeavyLoaderComponent,
            template_test_component_1.TemplateTestComponent,
            unless_directive_1.UnlessDirective
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map