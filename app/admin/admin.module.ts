import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageCrisesComponent } from './mamage-crises.component';
import { ManageHeroesComponent } from './manage-heroes.component';
import { AuthGuard } from "../auth-guard.service";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageCrisesComponent,
        ManageHeroesComponent
    ],
    providers: [ AuthGuard ]
})

export class AdminModule { }