import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';

// import { HeroDetailComponent } from "./hero-detail.component";
// import { HeroListComponent } from './hero-list.component';
// import { HeroComponent } from "./hero.component";
// import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent, HeroRoutingModule, HeroComponent, HeroListComponent} from '../heroes/index';

@NgModule ({
    imports: [ SharedModule, HeroRoutingModule ],
    declarations: [
        HeroComponent,
        HeroDetailComponent,
        HeroListComponent,
    ]
})

export class HeroModule { }