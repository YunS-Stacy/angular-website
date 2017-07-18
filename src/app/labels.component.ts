import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Label } from './label';
import { LabelService } from './label.service';


@Component({
  selector: 'my-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css'],
  providers: [LabelService],
})

export class LabelsComponent implements OnInit {
  title = 'my personal website';
  labels: Label[];
  selectedLabel: Label; // means referring to the class

  constructor(
    private labelService: LabelService,
    private router: Router,
  ) { }

  getLabels(): void {
    this.labelService.getLabels().then(labels => this.labels = labels);
  }

  ngOnInit(): void {
    this.getLabels();
  }

  onSelect(label: Label): void {
    this.selectedLabel = label;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedLabel.group, this.selectedLabel.name])
  }
}
