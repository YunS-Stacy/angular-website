import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Label } from './label';
import { LabelService } from './label.service';


@Component({
    selector: 'label-detail',
    templateUrl: './label-detail.component.html',
    styleUrls: ['./label-detail.component.css'],
})
export class LabelDetailComponent implements OnInit {
    @Input() label: Label;
    constructor(
        private labelService: LabelService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.labelService.getLabel(params['group'], params['name']))
        .subscribe(label => this.label = label);
    }

    goBack(): void {
        this.location.back();
    }
}