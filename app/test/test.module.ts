import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from "./test.component";
import { TestRoutingModule } from "./test-routing.module";

@NgModule({
    imports: [SharedModule, TestRoutingModule ],
    declarations: [ TestComponent ]
})

export class TestModule { }