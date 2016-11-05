import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "./test.component";

const route: Routes = [
    {
        path: '',
        component: TestComponent
    }
]
@NgModule({
    imports: [ RouterModule.forChild(route)],
    exports: [ RouterModule ]
})

export class TestRoutingModule { }