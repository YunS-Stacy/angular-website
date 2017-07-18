import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
    myStyle: {};
    myParams: {};
    width = 100;
    height = 100;

    ngOnInit(): void {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

        this.myParams = {
            particles: {
                number: {
                    value: 100,
                },
                color: {
                    value: '#fff'
                },
                shape: {
                    type: 'circle',
                },
            }
        };
    }
}
