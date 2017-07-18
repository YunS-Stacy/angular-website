import { Injectable } from '@angular/core';

import { Label } from './label';
import { LABELS } from './mock-labels';

@Injectable()

export class LabelService {
    getLabels(): Promise<Label[]> {
        return Promise.resolve(LABELS);
    }
// simulate slow connection, do the validation, etc.
    getLabelsSlowly(): Promise<Label[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getLabels()), 2000);
        });
    }
    getLabel(group: string, name: string): Promise<Label> {
        return this.getLabels()
        .then(labels => labels.find (label => (label.group === group) && (label.name === name)))
    }

}