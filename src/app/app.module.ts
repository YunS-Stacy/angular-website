import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { LabelsComponent } from './labels.component';
import { LabelDetailComponent } from './label-detail.component';
import { LabelService } from './label.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ParticlesModule,
  ],
  declarations: [
    AppComponent,
    LabelsComponent,
    LabelDetailComponent,
    BackgroundComponent,
  ],
  providers: [LabelService],
  bootstrap: [AppComponent],
})
export class AppModule { }
