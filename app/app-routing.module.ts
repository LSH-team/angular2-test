import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/contact', pathMatch: 'full'},
    { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule'},
    { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule'},
    { path: 'test', loadChildren: 'app/test-animation/test.module#TestModule'},
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }