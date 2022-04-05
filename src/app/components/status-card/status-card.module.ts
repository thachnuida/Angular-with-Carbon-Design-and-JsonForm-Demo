import { NgModule } from '@angular/core';
import { DialogModule } from 'carbon-components-angular';
import { ChartsModule } from "@carbon/charts-angular";
import { CommonModule } from '@angular/common';

import { StatusCardComponent } from './status-card.component';
@NgModule({
    imports: [
        CommonModule,
        DialogModule,
        ChartsModule
    ],
    exports: [StatusCardComponent],
    declarations: [StatusCardComponent],
    providers: [],
})
export class StatusCardModule { }
