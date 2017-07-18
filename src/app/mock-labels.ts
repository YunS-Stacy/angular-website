import { Label } from './label';

export const LABELS: Label[] = [
    // Each chip will have one and potentially more than one atmospheric label and zero or more common and rare labels. Chips that are labeled as cloudy should have no other labels, but there may be labeling errors.
    { group: 'Atmospheric Conditions', name: 'Clear' },
    // Labeled Cloudy, the chip should have no other label.
    { group: 'Atmospheric Conditions', name: 'Cloudy' },
    { group: 'Atmospheric Conditions', name: 'Hazy' },
    { group: 'Atmospheric Conditions', name: 'Partly Cloudy' },

    { group: 'Common Land Cover/Use Phenomena', name: 'Primary Rain Forest' },
    { group: 'Common Land Cover/Use Phenomena', name: 'Water (Rivers & Lakes)' },
    { group: 'Common Land Cover/Use Phenomena', name: 'Habitation' },
    { group: 'Common Land Cover/Use Phenomena', name: 'Agriculture' },
    { group: 'Common Land Cover/Use Phenomena', name: 'Road' },
    { group: 'Common Land Cover/Use Phenomena', name: 'Cultivation' },
    { group: 'Common Land Cover/Use Phenomena', name: 'Bare Ground' },

    { group: 'Rare Land Cover/Use Phenomena', name: 'Slash and Burn' },
    { group: 'Rare Land Cover/Use Phenomena', name: 'Selective Logging' },
    { group: 'Rare Land Cover/Use Phenomena', name: 'Blooming' },
    { group: 'Rare Land Cover/Use Phenomena', name: 'Conventional Mining' },
    { group: 'Rare Land Cover/Use Phenomena', name: 'Artisanal Mining' },
    { group: 'Rare Land Cover/Use Phenomena', name: 'Blow Down' },
];