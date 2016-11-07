import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from "./test.component";
import { TestRoutingModule } from "./test-routing.module";
import { HeroBirthdayComponent } from '../pipe/hero-birthday1.component';
import { ExponentialStrengthPipe } from '../pipe/exponential-strength.pipe';
import { PowerBoostCalculatorComponent } from  '../pipe/power-boost-calculator.component';


@NgModule({
    imports: [SharedModule, TestRoutingModule ],
    declarations: [
        TestComponent,
        HeroBirthdayComponent,
        ExponentialStrengthPipe,
        PowerBoostCalculatorComponent
    ]
})

export class TestModule { }