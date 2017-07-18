import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackgroundComponent } from './components/background/background.component';
import { LabelsComponent } from './labels.component';
import { LabelDetailComponent } from './label-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full',
    }, {
        path: 'index',
        component: BackgroundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
