import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BclInMemoryDataService } from './bcl-in-memory-data.service';

import { BclComponent } from './bcl.component';

@NgModule({
  declarations: [
    BclComponent
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
