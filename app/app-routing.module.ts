import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth-guard.service";
import { PreloadSelectedModules } from "./selective-preload-strategy";

const routes: Routes = [
    { path: '', redirectTo: '/contact', pathMatch: 'full'},
    { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule'},
    { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule'},
    { path: 'test', loadChildren: 'app/test/test.module#TestModule'},
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canLoad:[AuthGuard], data: { preload: true , test: 'test'}}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true})],
    exports: [ RouterModule ],
    providers: [
        PreloadSelectedModules
    ]
})

export class AppRoutingModule { }