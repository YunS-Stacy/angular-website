import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';
import { MdGridListModule } from '@angular/material';


import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { LabelsComponent } from './labels.component';
import { LabelDetailComponent } from './label-detail.component';
import { LabelService } from './label.service';
import { TagComponent } from './components/tag/tag.component';
import { WorkGridComponent } from './components/work-grid/work-grid.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MdGridListModule,

    ParticlesModule,
  ],
  declarations: [
    AppComponent,
    LabelsComponent,
    LabelDetailComponent,
    BackgroundComponent,
    TagComponent,
    WorkGridComponent,
  ],
  providers: [LabelService],
  bootstrap: [AppComponent],
})
export class AppModule { }
