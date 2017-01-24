import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BclInMemoryDataService } from './bcl-in-memory-data.service';

import { BclComponent } from './bcl.component';
import { BclIconComponent } from './bcl-icon/bcl-icon.component';
import { BclPercentageBarComponent } from './bcl-percentage-bar/bcl-percentage-bar.component';
import { BclPieChartComponent } from './bcl-pie-chart/bcl-pie-chart.component';

@NgModule({
  declarations: [
    BclComponent,
    BclIconComponent,
    BclPercentageBarComponent,
    BclPieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(BclInMemoryDataService)
  ],
  providers: [],
  bootstrap: [BclComponent]
})
export class BclModule { }
